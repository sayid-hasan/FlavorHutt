import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const FoodItemDetails = () => {
  const { id } = useParams();
  const axios = useAxios();

  // tanstack for getting single data
  const {
    data: foodItem = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["foodItem"],
  });
  const getData = async () => {
    const { data } = await axios.get(`/allFoods/${id}`);
    return data;
  };
  // destructure items from foodItem
  const {
    foodName,
    foodImg,
    description,
    category,
    price,
    starRating,
    foodDetails,
  } = foodItem;
  console.log(`food details page`, foodItem);
  console.log(`foodItemDetails page`, id);
  // erorr and loading handling
  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return <>wait</>;
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
      <div className="max-w-5xl flex items-center md:items-stretch gap-2 flex-col md:flex-row-reverse overflow-hidden bg-white/70 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 h-full">
        <img
          className="object-cover w-full md:w-1/2 md:min-h-[400px] h-full"
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
            <p className="mt-2 tracking-wide text-sm text-gray-600 dark:text-gray-400">
              <span className="font-firaSans text-xl text-[#B20000]">
                {foodDetails.slice(0, 1)}
              </span>{" "}
              {foodDetails.slice(1, foodDetails.length)}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  Jone Doe
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2015
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;