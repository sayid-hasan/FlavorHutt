import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/Images/AddItemBg.jpg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";

const AddItemPage = () => {
  const { user } = useContext(AuthContext);
  const axiosNonSecure = useAxios();
  const { mutateAsync } = useMutation({
    mutationFn: async ({ foodData }) => {
      const { data } = await axiosNonSecure.post("/allFoods", foodData);
      console.log("inside use mutation in food add page", data);
    },
    onSuccess: () => {
      toast.success("Food added successfully");
    },
    onError: (error) => {
      toast.error("Failed to add food", error);
    },
  });

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    const { foodName, foodImg, category, stock, price, origin, description } =
      data;
    const foodData = {
      foodName,
      foodImg,
      category,
      stock: parseFloat(stock),
      price: parseFloat(price),
      origin,
      description,
      addedBy: { name: user?.displayName, email: user?.email },
    };
    console.log("data that will be sent to browser", foodData);
    //   data to send to server
    mutateAsync({ foodData });
  };

  useEffect(() => {
    // Set up a subscription to watch 'quantity' field
    const subscription = watch(() => {
      // Default to 1 if quantity is undefined
      // Calculate and update total price
    });

    // Cleanup the subscription
    return () => subscription.unsubscribe();
  }, [watch]); // Only re-run if 'watch' or 'pricePerUnit' change

  return (
    <div
      className={`bg-red-200  flex justify-center items-center text-white  bg-cover bg-center min-h-screen w-full rounded-lg font-frescha  max-w-7xl    `}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="lg:max-w-3xl md:max-w-2xl max-w-md rounded-lg w-full md:bg-white/10 backdrop-blur-md mx-auto overflow-x-hidden font-firaSans">
        <Helmet>
          <title>Add Item</title>
        </Helmet>
        <div className="flex  flex-col ">
          <div className="w-full my-5 grow   p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl md:text-4xl font-frescha text-white  font-bold text-center">
              Please tell us about your dish
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              {/* first row FOODNAME AND FOODIMG */}
              <div className="flex md:flex-row flex-col items-center justify-between gap-3">
                {/* foodName */}
                <div className="space-y-1 grow md:w-1/2 w-full text-sm">
                  <label
                    htmlFor="foodName"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Food
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    id="foodName"
                    {...register("foodName", {
                      required: true,
                    })}
                    placeholder="Food Name"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* foodImg */}
                <div className="space-y-1  md:w-1/2 w-full grow text-sm">
                  <label
                    htmlFor="foodImg"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    image
                  </label>
                  <input
                    type="text"
                    name="foodImg"
                    id="foodImg"
                    {...register("foodImg", { required: true })}
                    placeholder="https://yourDishImage.com"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              {/* 2nd row categopry and stock */}
              <div className="flex md:flex-row flex-col items-center justify-between gap-3">
                {/* quantity / stock*/}
                <div className="space-y-1 md:w-1/2 w-full grow text-sm">
                  <label
                    htmlFor="stock"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    quantity
                  </label>
                  <input
                    type="number"
                    min={1}
                    name="stock"
                    id="stock"
                    {...register("stock", {
                      required: true,
                    })}
                    placeholder="please enter quantity"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* categrpoy */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="category"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    {...register("category", {
                      required: true,
                    })}
                    placeholder="please define a category"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              {/* 3rd row price and origin */}
              <div className="flex md:flex-row flex-col items-center justify-between gap-3">
                {/* price */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="price"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    {...register("price", {
                      required: true,
                    })}
                    placeholder="please enter price"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* origin */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="origin"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    {...register("origin", {
                      required: true,
                    })}
                    placeholder="Mention where it originated from"
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              {/* 4rd row description */}
              <div className="flex md:flex-row flex-col items-start justify-between gap-3">
                {/* description */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="description"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    {...register("description", {
                      required: true,
                    })}
                    placeholder="tell people about your dish"
                    className="w-full min-h-[100px] px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                // disabled={stock === 0}
                className=" flex justify-center items-center flex-1 grow w-full"
              >
                <GlassmorphismButton
                  containerClassName={`w-full`}
                  text={`Add`}
                  className={` md:h-[50px] w-full grow flex-1 text-base md:text-lg lg:text-xl `}
                ></GlassmorphismButton>
              </button>
            </form>
          </div>

          {/* <ToastContainer></ToastContainer> */}
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
