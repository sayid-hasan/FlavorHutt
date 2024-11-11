import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";

const UpdateModal = ({
  setIsOpen,
  foodImg,
  foodName,
  category,
  price,
  id,
  origin,
  description,
  stock,
}) => {
  const axiosNonSecure = useAxios();
  const { mutateAsync } = useMutation({
    mutationFn: async ({ foodData }) => {
      const { data } = await axiosNonSecure.put(`/updateFood/${id}`, foodData);
      console.log("inside use mutation in food add page", data);
    },
    onSuccess: () => {
      toast.success("Food updated successfully");
    },
    onError: (error) => {
      toast.error("Failed to update food", error);
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("update modal", data);
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
    };
    console.log("data that will be sent to browser", foodData);
    //   data to send to server
    mutateAsync({ foodData });
  };

  useEffect(() => {
    const subscription = watch(() => {
      //console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <div className={`absolute flex  font-frescha justify-center `}>
      <Helmet>
        <title>Update your dish</title>
      </Helmet>

      <div
        className="fixed inset-0 z-10 overflow-y-auto "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end   justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative backdrop-blur-md bg-white/40  inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform  rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-md sm:p-6 sm:align-middle">
            <h3
              className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
              id="modal-title"
            >
              Update
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Capture the Moment, Share the Magic: Turn Your Dining Experiences
              into Lasting Memories with Us!
            </p>

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
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={foodName}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* foodImg */}
                <div className="space-y-1  md:w-1/2 w-full grow text-sm">
                  <label
                    htmlFor="foodImg"
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
                  >
                    image
                  </label>
                  <input
                    type="text"
                    name="foodImg"
                    id="foodImg"
                    {...register("foodImg", { required: true })}
                    defaultValue={foodImg}
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
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={stock}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* categrpoy */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="category"
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={category}
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
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={price}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* origin */}
                <div className="space-y-1 md:w-1/2 w-full  grow text-sm">
                  <label
                    htmlFor="origin"
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={origin}
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
                    className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
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
                    defaultValue={description}
                    className="w-full min-h-[100px] px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                {/* cancel btn */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    return setIsOpen(false);
                  }}
                >
                  <GlassmorphismButton text="cancel"></GlassmorphismButton>
                </button>

                {/* send feedback */}
                <button>
                  <GlassmorphismButton text="update"></GlassmorphismButton>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
