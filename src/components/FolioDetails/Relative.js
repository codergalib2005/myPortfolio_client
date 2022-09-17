import React from "react";
import { Helmet } from "react-helmet";
import { Pagination } from "swiper";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { useGetRandomProjectQuery } from "../../features/api/apiSlice";
import LoadCard from "./LoadCard";
import RelativeItem from "./RelativeItem";
export default function Relative() {
  const { data, isLoading, isError } = useGetRandomProjectQuery();
  let items = data?.data;
  let content = null;
  if (isLoading) {
    content = (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <div className="hidden sm:block">
          <LoadCard />
        </div>
        <div className="hidden sm:block">
          <LoadCard />
        </div>
        <div className="hidden md:block">
          <LoadCard />
        </div>
        <div className="hidden lg:block">
          <LoadCard />
        </div>
      </div>
    );
  } else if (!isLoading && isError) {
    content = null;
  } else if (!isLoading && !isError && items.length === 0) {
    content = null;
  } else if (!isLoading && !isError && items.length > 0) {
    content = (
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <RelativeItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <div className="mt-16 mb-10 container mx-auto px-4 feature-font">
      <Helmet>
        {/* <title>Asadullah Hil Galib</title> */}
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
          href={`https://happy-snyder-173398.netlify.app`}
        />
      </Helmet>
      <div>{content}</div>
    </div>
  );
}
