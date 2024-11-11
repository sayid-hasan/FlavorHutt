import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import ReactStarsRating from "react-awesome-stars-rating";
import BtnWithICon from "../../Components/PrimaryButton/NormalBtn/BtnWithICon";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/Images/user.png";
import FoodDetailsSkeleton from "./FoodDetailsSkeleton";

const FoodItemDetails = () => {
  const { id } = useParams();
  const axios = useAxios();

  console.log("food item  details: " + id);

  // tanstack for getting single data
  const {
    data: foodItem = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["foodItemDetails"],
  });
  const getData = async () => {
    const { data } = await axios.get(`/allFoodItems/${id}`);
    return data;
  };
  // destructure items from foodItem
  const {
    foodName,
    foodImg,
    description,
    stock,
    category,
    price,
    addedBy,
    starRating,
    foodDetails,
    origin,
  } = foodItem;
  console.log(`food details page`, foodItem);
  console.log(`foodItemDetails page`, id);
  // erorr and loading handling
  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return <FoodDetailsSkeleton></FoodDetailsSkeleton>;
  }
  return (
    <div
      className={`bg-red-200 flex justify-center items-center   bg-cover bg-center min-h-screen w-full rounded-lg font-frescha `}
      style={{
        backgroundImage: `url(${foodImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>{foodName} Details</title>
      </Helmet>
      <div className="max-w-5xl flex items-center md:items-stretch gap-2 flex-col md:flex-row-reverse overflow-hidden bg-white/60  md:bg-white/70 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 h-full">
        <img
          className="object-cover w-full md:w-1/2 md:min-h-[500px] h-full"
          src={foodImg}
          alt={foodName}
        />

        <div className="p-6">
          <div>
            <span className="text-base tracking-wider  font-bold text-[#B20000] uppercase dark:text-blue-400">
              {category}
            </span>
            <h2 className="font-firaSans text-2xl md:text- font-bold">
              {foodName}
            </h2>
            {/* rating */}
            <div className="flex justify-start items-center gap-2">
              <ReactStarsRating
                isEdit={false}
                isHalf={true}
                className="flex justify-center items-center my-2"
                secondaryColor="#B20000"
                primaryColor="#ff7f50"
                count={starRating}
              />
            </div>
            <div className="flex mt-2 font-bold font-Courgette justify-between items-center">
              {/* origin */}
              <div className="text-base text-[#613728] tracking-widest ">
                <span className="text-lg ">{origin.slice(0, 1)}</span>
                {origin.slice(1, origin.length)}
              </div>
              {/* prrice */}
              <div className="text-[#B20000]">
                <span className="text-2xl">
                  {price.toString().length >= 4
                    ? price.toString().slice(0, 2)
                    : price.toString().slice(0, 1)}
                </span>
                {price.toString().length >= 4
                  ? price.toString().slice(2, price.toString().length)
                  : price.toString().slice(1, price.toString().length)}{" "}
                AED
              </div>
            </div>

            <p className="mt-2 tracking-wide text-sm text-gray-600 dark:text-gray-400">
              <span className="font-firaSans text-xl text-[#B20000]">
                {foodDetails.slice(0, 1)}
              </span>{" "}
              {foodDetails.slice(1, foodDetails.length)}
            </p>
            {/* description */}
            <p className="mt-2 tracking-wide text-sm text-gray-600 dark:text-gray-400">
              <span className="font-firaSans text-xl text-[#B20000]">
                {description.slice(0, 1)}
              </span>{" "}
              {description.slice(1, description.length)}
            </p>

            <div
              className="flex justify-between items-center my-3
            w-full grow flex-1"
            >
              {/* stock */}
              <div className=" group flex gap-2 items-center justify-start">
                <span className="md:px-2 lg:px-3 px-1 group-hover:translate-x-1 py-1 rounded-full bg-[#613728] md:text-base text-sm hover:bg-[#B20000] transition duration-100 text-white ">
                  Stock Available
                </span>
                <span className="md:text-xl text-base py-1"> {stock}</span>
              </div>
              {/* puschase Buton */}
              <Link
                to="/purchase"
                state={{
                  foodName: foodName,
                  price: price,
                  stock: stock,
                  addedBy,
                }}
                className="flex justify-end items-stretch py-1 w-1/2 "
              >
                <BtnWithICon
                  icon={<FaArrowRight />}
                  text={"Purchase"}
                  classname={
                    "font-frescha tracking-wide text-base mt-0 rounded-full w-full bg-[#B20000] hover:bg-[#613728] py-1"
                  }
                ></BtnWithICon>
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={logo}
                  alt={addedBy?.name}
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {addedBy?.name}
                </a>
              </div>
              {/* <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2015
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
