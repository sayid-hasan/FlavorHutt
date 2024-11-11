import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/Images/PurchasePageBg.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";

import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
const PurchasePage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const axios = useAxios();

  // get food data
  const { data: foodData = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["foodItemDetails"],
  });
  const getData = async () => {
    const { data } = await axios.get(`/allFoodItems/${id}`);
    return data;
  };

  const { foodName, price, stock, addedBy } = foodData;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const axiosNonSecure = useAxios();
  const navigate = useNavigate();

  // change if quantity has changed

  //   console.log(`purchase page ${(foodName, price)}`);
  //   console.log(`purchase page ${foodName}`);
  //   console.log(`purchase page ${stock}`);
  //   console.log(`purchase page ${user?.displayName}`);
  console.log(`purchase page ${totalPrice}`);

  // challenge requirements

  // Update total price whenever quantity changes

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.quantity.value;
    setQuantity(parseInt(newQuantity));
    setTotalPrice(parseFloat(newQuantity) * price); // Calculate new total price
  };

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    const { food, quantity, price, buyerName, buyerEmail } = data;
    console.log(
      `purchase page`,
      food,
      quantity,
      price,
      buyerName,
      buyerEmail,
      totalPrice
    );
    // Create order in database or other backend service
    const sellDetails = {
      food,
      quantity: parseInt(quantity),
      price: parseInt(price),

      buyerName,
      buyerEmail,
      totalPrice: parseInt(totalPrice),
      addedBy,
    };
    // post data on database or other backend service
    const res = await axiosNonSecure.post("/purchaseHistory", sellDetails);
    if (res.data?.modifiedCount > 0) {
      toast.success("thanks for your order");
      setQuantity(1); // Reset quantity to 1
      setTotalPrice(price); // Reset total price to price per unit
      navigate("/"); // Navigate to Home
    } else {
      toast.error("Failed to create order");
    }
  };

  useEffect(() => {
    // Set up a subscription to watch 'quantity' field
    const subscription = watch((value) => {
      const quantity = value?.quantity || 1; // Default to 1 if quantity is undefined
      setTotalPrice(quantity * price); // Calculate and update total price
      if (stock === 0) {
        toast.error("Out of stock");
      }
    });

    // Cleanup the subscription
    return () => subscription.unsubscribe();
  }, [watch, price, stock]); // Only re-run if 'watch' or 'pricePerUnit' change

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
          <title>Purchase</title>
        </Helmet>
        <div className="flex  flex-col ">
          <div className="w-full my-5 grow   p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl md:text-4xl font-frescha text-white  font-bold text-center">
              Please confirm your order
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              {/* first row */}
              <div className="flex items-center justify-between gap-3">
                {/* foodName */}
                <div className="space-y-1 grow w-1/2 text-sm">
                  <label
                    htmlFor="food"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Food
                  </label>
                  <input
                    type="text"
                    name="food"
                    id="food"
                    {...register("food", {
                      required: true,
                      readOnly: true,
                    })}
                    value={foodName}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* price */}
                <div className="space-y-1  w-1/2 grow text-sm">
                  <label
                    htmlFor="food"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    AED
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    {...register("price", { required: true, readOnly: true })}
                    value={price}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              {/* 2nd row */}
              <div className="flex items-center justify-between gap-3">
                {/* quantity */}
                <div className="space-y-1 w-1/2 grow text-sm">
                  <label
                    htmlFor="quantity"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    quantity
                  </label>
                  <input
                    type="number"
                    onChange={handleQuantityChange}
                    placeholder={quantity}
                    max={stock}
                    min={1}
                    name="quantity"
                    id="quantity"
                    {...register("quantity", {
                      required: true,
                    })}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
                {/* Buyer name */}
                <div className="space-y-1 w-1/2  grow text-sm">
                  <label
                    htmlFor="buyerName"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Buyer
                  </label>
                  <input
                    type="text"
                    name="buyerName"
                    id="buyerName"
                    {...register("buyerName", {
                      required: true,
                      readOnly: true,
                    })}
                    value={user?.displayName}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>
              {/* 3rd row */}
              <div className="flex items-center justify-between gap-3">
                {/* Buyer name */}
                <div className="space-y-1 w-1/2  grow text-sm">
                  <label
                    htmlFor="buyerEmail"
                    className="block dark:text-gray-600 text-white font-bold tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="buyerEmail"
                    id="buyerEmail"
                    {...register("buyerEmail", {
                      required: true,
                      readOnly: true,
                    })}
                    value={user?.email}
                    className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={stock === 0 || addedBy?.email === user.email}
                className=" flex justify-center items-center flex-1 grow w-full"
              >
                <GlassmorphismButton
                  containerClassName={`w-full`}
                  text={`Purchase ${totalPrice.toString().slice(0, 6)}`}
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

export default PurchasePage;
