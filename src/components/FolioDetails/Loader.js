import React from "react";

const Loader = () => {
  const List = ({ item }) => {
    return (
      <div className="mt-7">
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4"></div>
        <ul>
          {item.map((i, index) => (
            <div className="flex items-center">
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2 mb-4 mr-2"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div
      role="status"
      class="p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700 grid grid-cols-12 gap-6"
    >
      <div className="col-span-8 grid grid-cols-12 gap-4">
        <div className="col-span-10">
          <div class="flex justify-center items-center mb-4 bg-gray-300 rounded dark:bg-gray-700 h-700">
            <svg
              class="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div className="col-span-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              class="flex justify-center items-center mb-4 bg-gray-300 rounded dark:bg-gray-700 h-32"
            >
              <svg
                class="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex items-center justify-between">
          <div class="h-12 bg-gray-200 rounded dark:bg-gray-700 w-28 mb-2.5"></div>
          <div class="h-12 bg-gray-200 rounded dark:bg-gray-700 w-28 mb-2.5"></div>
          <div class="h-12 bg-gray-200 rounded dark:bg-gray-700 w-28 mb-2.5"></div>
        </div>
        <div className="pt-4">
          <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-2/4 mb-4"></div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
            ></div>
          ))}
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div>
          <List item={[1, 2, 3]} />
          <div className="grid grid-cols-2 gap-5">
            <List item={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            <List item={[1, 2, 3, 4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
