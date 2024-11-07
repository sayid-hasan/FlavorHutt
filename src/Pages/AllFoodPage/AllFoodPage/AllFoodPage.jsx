import { Helmet } from "react-helmet-async";
import ParallaxBg from "../../../Components/ParallaxBg/ParallaxBg";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { motion } from "framer-motion";
import fadeIn from "../../../Utilities/varient";
import AllFoodCard from "./AllFoodCard";

const AllFoodPage = () => {
  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: allFoods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["AlllFoods"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get("/allFoods");
    return data;
  };
  console.log(allFoods);
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <p>wait</p>;
  return (
    <div>
      {/*helment */}
      <Helmet>
        <title>All Foods</title>
      </Helmet>
      <div>
        <ParallaxBg
          className={`text-center text-3xl md:text-3xl lg:text-5xl tracking-[2px] text-[#ff7f50] font-frescha flex justify-center font-black items-center rounded-md md:min-h-[500px] 
            
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
