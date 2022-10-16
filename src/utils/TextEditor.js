import { RichTextEditor } from "@mantine/rte";
import React, { useState, useCallback, useMemo } from "react";

export default function TextEditor({ value, onChange }) {
    console.log(value);
    // Handle Image Upload
    const handleImageUpload = useCallback(
        (file) =>
            new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("image", file);

                fetch(
                    "https://api.imgbb.com/1/upload?key=aace97b9a0d4e6d8a83442b26ddb021e",
                    {
                        method: "POST",
                        body: formData,
                    }
                )
                    .then((response) => response.json())
                    .then((result) => resolve(result.data.url))
                    .catch(() => reject(new Error("Upload failed")));
            }),
        []
    );
    const people = [
        { id: 1, value: "Bill Horsefighter" },
        { id: 2, value: "Amanda Hijacker" },
        { id: 3, value: "Leo Summerhalter" },
        { id: 4, value: "Jane Sinkspitter" },
    ];

    const tags = [
        { id: 1, value: "JavaScript" },
        { id: 2, value: "TypeScript" },
        { id: 3, value: "Ruby" },
        { id: 3, value: "Python" },
    ];
    const mentions = useMemo(
        () => ({
            allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
            mentionDenotationChars: ["@", "#"],
            source: (searchTerm, renderList, mentionChar) => {
                const list = mentionChar === "@" ? people : tags;
                const includesSearchTerm = list.filter((item) =>
                    item.value.toLowerCase().includes(searchTerm.toLowerCase())
                );
                renderList(includesSearchTerm);
            },
        }),
        []
    );
    return (
        <RichTextEditor
            value={value}
            onChange={onChange}
            onImageUpload={handleImageUpload}
            mentions={mentions}
        />
    );
}