import React from 'react';

const Blog = () => {
  return (
    <div className="flex items-center justify-center" style={{minHeight: '90vh'}}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-gray-400 hover:text-red-500 text-4xl font-bold transform scale-100 hover:scale-105 smooth">No blog available</h1>
        </div>
    </div>
  );
};

export default Blog;