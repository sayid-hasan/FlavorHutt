import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swiper from "react-id-swiper";

import ReviewCard from "./ReviewCard";

import { useRef } from "react";
import ArrowBtn from "../../../Components/PrimaryButton/ArrowBtn/ArrowBtn";

const Carousol = () => {
  const axiosNonSecure = useAxios();
  const swiperRef = useRef(null);

  // navigation swiper  component
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  // tanstack
  const {
    data: topReviews = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["topReviews"],
  });
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      999: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get("/reviews");
    return data;
  };
  if (isError || error) {
    console.log(error);
  }
  console.log(topReviews);
  if (isLoading) return <p>wait</p>;
  return (
    <div className="overflow-hidden my-8">
      <Swiper ref={swiperRef} {...params}>
        {topReviews.map((review) => (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Swiper>
      <div className="swiper-btns text-center text-[#ff7f50] flex text-3xl justify-center items-center gap-4 ">
        <button onClick={goPrev}>
          <ArrowBtn
            classNameleft={`hover:-translate-x-3 transition duration-100 hover:text-[#B20000] `}
          ></ArrowBtn>
        </button>
        <button onClick={goNext}>
          <ArrowBtn
            position="right"
            classNameright={`hover:translate-x-3 transition duration-100 hover:text-[#B20000] `}
          ></ArrowBtn>
        </button>
      </div>
    </div>
  );
};

export default Carousol;
