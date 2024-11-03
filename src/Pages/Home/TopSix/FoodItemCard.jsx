import { Link } from "react-router-dom";
import fadeIn from "../../../Utilities/varient";
import { motion } from "framer-motion";
import GlassmorphismButton from "../../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
const FoodItemCard = ({ foodItem }) => {
  // console.log(user);
  const { foodImg, foodName, category, price, _id, description } = foodItem;
  // console.log(_id);
  // sending data on post collection with tanstack

  //   const { mutateAsync } = useMutation({
  //     mutationFn: async ({ wishlistData }) => {
  //       const { data } = await axiosNonSecure.post(
  //         `/wishlist?email=${user.email}`,
  //         wishlistData
  //       );
  //       console.log(data);
  //     },
  //     onSuccess: () => {
  //       toast.success("added on wishlist");
  //     },
  //   });

  //   // wishlist handling
  //   const handleWishlist = () => {
  //     const wishlistData = {
  //       blog_title,
  //       id: _id,
  //       image,
  //       wishListerEmail: user.email,
  //       category_name,
  //       short_description,
  //       user_email,
  //     };
  //     // console.log(wishlistData);
  //     // sending data on wishlist collection through server
  //     mutateAsync({ wishlistData });
  //   };
  return (
    <div>
      {" "}
      <div className=" max-w-full md:max-w-sm cursor-pointer transition transform hover:scale-105 duration-300  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <motion.img
          variants={fadeIn("right", 0)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="object-cover object-center w-full h-56  transition duration-100"
          src={foodImg}
          alt="avatar"
        />

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center px-6 py-3 bg-gray-900"
        >
          <h1 className="mx-3 font-frescha tracking-[2px] text-[#B20000] text-lg font-font-oswald font-semibold ">
            {category}
          </h1>
        </motion.div>

        <div className="px-6 py-4">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-between items-center"
          >
            <motion.h1 className="text-xl font-firaSans tracking-wide font-semibold  min-h-[20px]  text-gray-800 dark:text-white">
              {foodName}
            </motion.h1>

            <div className="text-[17px] font-frescha font-bold text-[#0FB478] ">
              {price} AED
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 text-[#b2b2b2] font-firaSans tracking-wide min-h-[90px] dark:text-gray-400"
          >
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex  justify-center  items-center mt-4 text-gray-700 dark:text-gray-200"
          >
            <Link to={`/allfoodItems/${_id}`} className="">
              <GlassmorphismButton text="View Details"></GlassmorphismButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
