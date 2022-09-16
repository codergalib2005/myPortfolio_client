import React from "react";
import Blogs from "../components/Blogs";

const Blog = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container mx-auto px-6 text-center">
        <div class="services_page_title">
          <h3>Newsletter</h3>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Blog;
