import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import fadeIn from "../../../Utilities/varient";
import { motion } from "framer-motion";

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
  if (isLoading) return <p>wait</p>;
  return (
    <div className="mx-auto">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <h2 className=" text-4xl font-semibold leading-relaxed font-font-oswald ">
          Discover the Latest in Tech: Explore Our Recent <br />
          <span className="text-[#f26767]">Blog Posts</span>
        </h2>
        <p className="text-sm leading-relaxed text-[#454545] ">
          Stay ahead of the curve with our curated selection of the most
          cutting-edge tech and AI-related blog posts. From artificial
          intelligence breakthroughs to emerging technologies, delve into
          fascinating insights and explore the future of innovation. Whether
          you&#39;re a tech enthusiast, a curious learner, or an industry
          professional, our collection of recent blogs offers something for
          everyone. Explore now and ignite your curiosity!
        </p>
      </motion.div>

      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topFoodItems.map((foodItem) =>
          //   <FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem>
          console.log(foodItem)
        )}
      </div>
    </div>
  );
};

export default TopSellItems;
