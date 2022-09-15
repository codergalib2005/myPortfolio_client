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
          className="text-gray-100 border-2 border-gray-100 text-base py-3 px-4 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500"
        >
          Server Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 text-base py-3 px-4 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500"
        >
          Live Side
        </a>
      )}
      {client && (
        <a
          href={client}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 text-base py-3 px-4 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500"
        >
          Client Code
        </a>
      )}
    </div>
  );
};

export default Links;
