import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { useGetPortfoliosQuery } from "../../features/api/apiSlice";
import Message from "../../ui/Message";
import RelativeItem from "./RelativeItem";
export default function Relative() {
  const { data, isLoading, isError } = useGetPortfoliosQuery();
  let items = data?.data;
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError)
    content = <Message message="There was server error!" color="red" />;
  if (!isLoading && !isError && items.length === 0) content = null;
  if (!isLoading && !isError && items.length > 0) {
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
