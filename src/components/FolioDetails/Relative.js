import React from "react";
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
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          640: {
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
      <div>{content}</div>
    </div>
  );
}
