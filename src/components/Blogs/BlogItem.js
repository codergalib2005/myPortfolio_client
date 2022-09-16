import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div>
      <div class="bg-dark">
        <div class="h-200 overflow-hidden">
          <img
            className="transform scale-100 hover:scale-110 transition-all duration-150 ease-linear cursor-not-allowed"
            src="https://codergalib20.github.io/One-Page-Protfolio-design/images/blog/2.jpg"
            alt=""
          />
        </div>
        <div class="h-40 px-2 py-4 text-left flex justify-between flex-col">
          <div>
            <h3 class="text-gray-100 text-md font-bold">PSD to HTML</h3>
            <p class="text-gray-400 text-sm pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            <Link
              to={`/blogd/1`}
              class="flex items-center text-secondary  hover:text-white"
              href="#psd"
            >
              Read more{" "}
              <span className="flex pl-2 hover:pl-4">
                <AiOutlineCaretRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
