import React, { useState } from "react";
import CardLoad from "../components/CardLoad";
import FilterButton from "../components/FilterButton";
import PortfolioItem from "../components/PortfolioItem";
import { useGetPortfoliosQuery } from "../features/api/apiSlice";
import Message from "../ui/Message";

const Portfolios = () => {
  const { data, isLoading, isError } = useGetPortfoliosQuery();
  const [current, setCurrent] = useState("All");
  let items = data?.data;
  let content = null;
  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardLoad />
        <CardLoad />
        <CardLoad />
        <CardLoad />
        <CardLoad />
        <CardLoad />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div className=" min-h-300 flex items-center text-center justify-center">
        <Message
          message="There was server side error!"
          color="red"
          deep="600"
        />
      </div>
    );
  } else if (!isLoading && !isError && items.length === 0) {
    content = (
      <div className=" min-h-300 flex items-center text-center justify-center">
        <Message message="Project not found!" color="green" deep="600" />
      </div>
    );
  } else if (!isLoading && !isError && items?.length > 0) {
    if (current === "All") {
      content = content = (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <PortfolioItem key={item._id} item={item} />
          ))}
        </div>
      );
    } else {
      const filterItems = items.filter((item) =>
        item.technology.includes(`${current}`)
      );
      console.log(filterItems);
      if (filterItems.length === 0) {
        content = (
          <Message message="No Project found!" color="gray" deep="400" />
        );
      } else {
        content = (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterItems.map((item) => (
              <PortfolioItem key={item._id} item={item} />
            ))}
          </div>
        );
      }
      console.log(content);
      console.log(filterItems.length);
    }
  }
  console.log(items);

  return (
    <div style={{ minHeight: "90vh" }}>
      {/* ===========Buttons=========== */}
      <div className="container mx-auto px-6 py-10">
        <FilterButton current={current} setCurrent={setCurrent} />
        {content}
      </div>
    </div>
  );
};

export default Portfolios;
