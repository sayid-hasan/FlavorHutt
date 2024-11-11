import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import fadeIn from "../../Utilities/varient";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import MyAddedFoodCard from "./MyAddedFoodCard";
import MyaddedFoodSkeleton from "./MyaddedFoodSkeleton";
const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const axiosNonSecure = useAxios();

  // getData function to get all data based on email
  const getData = async () => {
    if (user) {
      const { data } = await axiosNonSecure.get(`/allFoods/${user?.email}`);
      return data;
    }
  };

  const {
    data: myaddedfoods = [],
    isError,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["myaddedfoods", user?.email, "updatemyaddFood"],
  });
  console.log("my addedfoods", myaddedfoods);
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <MyaddedFoodSkeleton></MyaddedFoodSkeleton>;

  return (
    <div>
      {/*helment */}
      <Helmet>
        <title>My Added Foods</title>
      </Helmet>
      <div>
        <div className="md:my-8 my-4">
          <div className="text-center space-y-2">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-2xl md:text-4xl tracking-wide font-frescha text-[#ff7f50] font-semibold leading-relaxed font-font-oswald "
            >
              Manage Your Added Dishes
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-sm md:text-base leading-relaxed text-[#b2b0b0] max-w-screen-sm mx-auto "
            >
              Easily review and manage all the dishes you&#39;ve added to the
              menu. Each card displays your dish details along with an update
              button, allowing you to make quick edits and keep your menu fresh
              and up-to-date.
            </motion.p>
          </div>
          <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {myaddedfoods.map(
              (foodItem) => (
                <MyAddedFoodCard
                  key={foodItem._id}
                  foodItem={foodItem}
                  refetch={refetch}
                ></MyAddedFoodCard>
              )
              // console.log(foodItem)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedFoods;
