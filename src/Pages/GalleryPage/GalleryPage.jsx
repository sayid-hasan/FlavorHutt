import { Helmet } from "react-helmet-async";
import fadeIn from "../../Utilities/varient";
import ParallaxBg from "../../Components/ParallaxBg/ParallaxBg";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import { useContext, useState } from "react";
import FeedbackModal from "./FeedbackModal";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import "./gallery.css";
import GalleryPageSkeleton from "./GalleryPageSkeleton";
const GalleryPage = () => {
  const axiosNonSecure = useAxios();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(location?.state);
  // tanstack
  const {
    data: feedBacks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["feedBacks"],
  });
  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get(`/feedBacks`);
    return data;
  };

  // modal loading
  const handleModal = () => {
    if (user) {
      setIsOpen(true);
    } else {
      navigate("/login", {
        state: { from: location.pathname, isOpen: true },
      });
    }
  };
  console.log("gallery page loaded", feedBacks);
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <GalleryPageSkeleton></GalleryPageSkeleton>;
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <ParallaxBg
        className={`bg-parallax2 text-center text-3xl md:text-3xl lg:text-5xl tracking-[2px] text-[#ff7f50] font-frescha flex justify-center font-black items-center rounded-md md:min-h-[500px] 
            
            `}
      >
        <div className="bg-white/60 backdrop-blur-md bg-clip-text  text-ellipsis  px-5 py-3 rounded-[16px]">
          Share Your Moments
        </div>
      </ParallaxBg>
      <div className="md:my-8 my-4">
        <div className="text-center space-y-2">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-2xl md:text-4xl tracking-wide font-firaSans text-[#ff7f50] font-semibold leading-relaxed font-font-oswald "
          >
            Moments & Memories at FlavorHutt
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-sm md:text-base leading-relaxed text-[#b2b0b0] max-w-screen-sm mx-auto "
          >
            Relive the flavors and experiences that make our restaurant special.
            Explore heartfelt feedback, share your own moments, and discover
            what makes dining with us unforgettable. Join our community of food
            lovers and see why every meal is a memory in the making.
          </motion.p>
        </div>
        <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {feedBacks.map(
            (feedback) => (
              <div
                key={feedback._id}
                className="relative parent group transition-all w-full duration-1000 gallery "
              >
                <img
                  src={feedback?.imageUrl}
                  className="md:max-h-[270px] object-cover object-center max-w-full rounded-lg"
                  alt=""
                />

                {/* overlay */}
                <div
                  className="absolute overlay font-frescha hidden gallery-overlay group-hover:flex group-hover:-translate-y-1/2 
                  group-hover:transition-all group-hover:duration-1000
                transition-all duration-1000   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 backdrop-blur-[7px] bg-white/20 w-[90%] h-[90%] rounded-2xl border-white border-[1px]   text-white flex-col justify-center items-center "
                >
                  <p className="text-xs md:text-sm text-center w-3/4 mx-auto ">
                    {feedback?.feedback}
                  </p>
                  <p className="text-xs font-firaSans font-bold text-center ">
                    {feedback?.userName}
                  </p>
                </div>
              </div>
            )
            // console.log(foodItem)
          )}
        </div>
        {/* ADD BUTTON */}
        <div className="flex  justify-center ">
          <button onClick={handleModal}>
            <GlassmorphismButton
              textClass={`  text-xs`}
              text={`Share Your Moments`}
              className="md:w-[250px] w-[150px] text-xs"
            ></GlassmorphismButton>
          </button>
        </div>

        {/* modla */}
        {isOpen && <FeedbackModal setIsOpen={setIsOpen}></FeedbackModal>}
      </div>
    </div>
  );
};

export default GalleryPage;
