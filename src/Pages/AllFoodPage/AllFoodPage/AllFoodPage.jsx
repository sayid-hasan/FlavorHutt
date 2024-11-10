import { Helmet } from "react-helmet-async";
import ParallaxBg from "../../../Components/ParallaxBg/ParallaxBg";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { motion } from "framer-motion";
import fadeIn from "../../../Utilities/varient";
import AllFoodCard from "./AllFoodCard";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import AllFoodSkeleton from "./AllFoodSkeleton";

const AllFoodPage = () => {
  const axiosNonSecure = useAxios();
  const [searchTerm, setSearchTerm] = useState("");

  // tanstack
  const {
    data: allFoods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["AlllFoods", searchTerm],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get(`/allFoods?query=${searchTerm}`);
    return data;
  };
  const { register, handleSubmit, watch } = useForm();
  // handle seach data
  const onSubmit = async (data) => {
    const { search } = data;
    console.log(search);
    setSearchTerm(search);
  };

  useEffect(() => {
    const subscription = watch(() => {
      //console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  console.log(allFoods);
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <AllFoodSkeleton></AllFoodSkeleton>;

  return (
    <div>
      {/*helment */}
      <Helmet>
        <title>All Foods</title>
      </Helmet>
      <div>
        <ParallaxBg
          className={`bg-parallax1 text-center text-3xl md:text-3xl lg:text-5xl tracking-[2px] text-white font-frescha flex justify-center font-black items-center rounded-md md:min-h-[500px] 
            
            `}
        >
          <div className="bg-white/60 backdrop-blur-md bg-clip-text  text-ellipsis  px-5 py-3 rounded-[16px]">
            A Symphony of Flavors
          </div>
        </ParallaxBg>
        <div className="md:my-8 my-4">
          <div className="text-center space-y-2">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-2xl md:text-4xl tracking-wide font-frescha text-[#ff7f50] font-semibold leading-relaxed font-font-oswald "
            >
              Taste the World: Your Culinary Adventure Awaits
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-sm md:text-base leading-relaxed text-[#b2b0b0] max-w-screen-sm mx-auto "
            >
              Explore our vibrant selection of mouthwatering dishes, crafted to
              delight your senses and ignite your passion for flavor
            </motion.p>
            {/* searchbar */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="">
              <label className="input input-bordered flex items-center gap-2 max-w-xs justify-center mx-auto">
                <input
                  type="text"
                  name="search"
                  {...register("search")}
                  className="grow"
                  placeholder="Search"
                />
                <button type="submit">
                  {" "}
                  {/* search svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </label>
            </form>
          </div>
          <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allFoods.map(
              (foodItem) => (
                <AllFoodCard
                  key={foodItem._id}
                  foodItem={foodItem}
                ></AllFoodCard>
              )
              // console.log(foodItem)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodPage;
