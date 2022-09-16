import React from "react";

const Links = ({ links }) => {
  const { live, server, client } = links || {};
  return (
    <div className="flex items-center justify-between pb-4">
      {server && (
        <a
          href={server}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Server Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Live Side
        </a>
      )}
      {client && (
        <a
          href={client}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Client Code
        </a>
      )}
    </div>
  );
};

export default Links;
