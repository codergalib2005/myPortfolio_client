import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
    }
  }

  return (
    <div style={{ minHeight: "90vh" }}>
      <Helmet>
        <title>Asadullah Hil Galib || Projects</title>
        <meta
          name="description"
          content="Hey There! I'm Asadullah Hil Galib, I am Full stack (MERN) Developer Including ReactJs, NodeJs, ExpressJs, MongoDB, I'm an enthusiastic and
            detail-oriented, Mern Stack Developer. seeking an entry-level position with
            the Company to use my skills in coding, troubleshooting complex design, and
            assisting in the timely completion of projects."
        />
        <meta
          name="keyword"
          content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer "
        />
        <link
          rel="canonical"
          href={`https://happy-snyder-173398.netlify.app/blogd/portfolio`}
        />
      </Helmet>
      {/* ===========Buttons=========== */}
      <div className="container mx-auto px-6 py-10">
        <FilterButton current={current} setCurrent={setCurrent} />
        {content}
      </div>
    </div>
  );
};

export default Portfolios;
