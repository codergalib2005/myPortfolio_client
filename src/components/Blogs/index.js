import React from "react";
import BlogItem from "./BlogItem";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blogs;
