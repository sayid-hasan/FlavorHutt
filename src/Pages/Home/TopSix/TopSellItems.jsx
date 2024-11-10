import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import fadeIn from "../../../Utilities/varient";
import { motion } from "framer-motion";
import FoodItemCard from "./FoodItemCard";
import BtnWithICon from "../../../Components/PrimaryButton/NormalBtn/BtnWithICon";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import FoodCardSekeloton from "./FoodCardSekeloton";

const TopSellItems = () => {
  const axiosNonSecure = useAxios();

  // tanstack
  const {
    data: topFoodItems = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["topFoodItems"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get("/top-selling");
    return data;
  };
  if (isError || error) {
    console.log(error);
  }
  if (isLoading)
    return (
      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
      </div>
    );
  return (
    <div className="mx-auto">
      <div className="text-center space-y-2">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-2xl md:text-4xl tracking-wide font-frescha text-[#B22222] font-semibold leading-relaxed font-font-oswald "
        >
          Culinary Delights Await You
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-sm md:text-base leading-relaxed text-[#b2b0b0] max-w-screen-sm mx-auto "
        >
          Experience a collection of our most cherished flavors! These
          top-selling dishes are celebrated for their exceptional taste and
          quality, inviting you to savor every bite.
        </motion.p>
      </div>

      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topFoodItems.map(
          (foodItem) => (
            <FoodItemCard key={foodItem._id} foodItem={foodItem}></FoodItemCard>
          )
          // console.log(foodItem)
        )}
      </div>
      <div className="flex w-full justify-center items-center">
        <Link to={`/allFoods`}>
          {" "}
          <BtnWithICon
            classname={`w-[200px] md:w-[300px] rounded-full`}
            text={`View More`}
            icon={<FaArrowAltCircleRight></FaArrowAltCircleRight>}
          ></BtnWithICon>
        </Link>
      </div>
    </div>
  );
};

export default TopSellItems;
