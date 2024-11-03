import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swiper from "react-id-swiper";

import ReviewCard from "./ReviewCard";

const Carousol = () => {
  const axiosNonSecure = useAxios();
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
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    <div className="overflow-hidden">
      <Swiper {...params}>
        {topReviews.map((review) => (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousol;
