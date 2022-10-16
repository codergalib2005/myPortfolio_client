import { useState } from "react";
import TextEditor from "../utils/TextEditor";

const initialValue = `<p><b style="color: red;">Hi!</b> Start your blog from here</p>`;


export default function AddReview() {
    const [description, onChange] = useState(initialValue);
    return (
        <div className="container mx-auto px-6 py-10">
            <div>Add</div>
            <div className="bg-white w-full max-w-3xl mx-auto p-3 rounded">
                <TextEditor value={description} onChange={onChange} />
            </div>
        </div>
    )
}