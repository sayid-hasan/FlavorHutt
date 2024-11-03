// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";
import carousoul1 from "../../../assets/Images/carousol1.jpg";
import carousoul2 from "../../../assets/Images/carousol2.jpg";
import carousoul3 from "../../../assets/Images/carousol3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import fadeIn from "../../../Utilities/varient";
import BtnWithICon from "../../../Components/PrimaryButton/NormalBtn/BtnWithICon";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className="my-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" relative rounded-lg overflow-hidden ">
              <div className=" w-full object-contain overflow-hidden">
                {" "}
                <img src={carousoul1} className="w-full" alt="" />
              </div>
              <div className="z-10 absolute flex justify-start items-center top-0 left-0 h-full w-full bg-black bg-opacity-20 md:px-16 px-5  rounded-lg">
                <div className="text-left flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl md:text-3xl font-firaSans font-bold text-white md:leading-relaxed leading-normal"
                  >
                    <span className="">Dive into a world of flavors</span>{" "}
                    <br />
                    <span className="  md:text-[39px] ">
                      with our expertly crafted{" "}
                      <span className="text-[#B22222]">dishes</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm md:text-base tracking-wider max-w-[600px] text-[#e2e2e2] font-firaSans md:leading-normal leading-tight">
                      made from the freshest ingredients to tantalize your taste
                      buds
                    </p>
                    <BtnWithICon
                      icon={<FaArrowRight className="text-lg" />}
                      text={"Explore our menu"}
                    ></BtnWithICon>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className=" w-full ">
                {" "}
                <img src={carousoul2} className="w-full " alt="" />
              </div>
              <div className="z-10 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black bg-opacity-20 md:px-16 px-5  rounded-lg">
                <div className="text-center flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl md:text-3xl  font-firaSans font-bold text-white md:leading-relaxed leading-normal tracking-wide"
                  >
                    <span className="">
                      Step into an unforgettable dining experience
                    </span>{" "}
                    <br />
                    <span className=" md:text-[39px] ">
                      where every detail from décor to
                      <span className="text-[#B22222]"> service</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm md:text-base tracking-wider   text-[#e2e2e2] font-firaSans md:leading-normal leading-tight">
                      is designed to make your meal extraordinary
                    </p>
                    <BtnWithICon
                      icon={<FaArrowRight className="text-xl" />}
                      text={"Book Your table"}
                    ></BtnWithICon>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className="h-[600px] w-full">
                {" "}
                <img src={carousoul3} className="w-full" alt="" />
              </div>
              <div className="z-10 absolute flex justify-end items-center top-0 left-0 h-full w-full bg-black bg-opacity-20 md:px-16 px-5  rounded-lg ">
                <div className="text-right flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-xl md:text-3xl font-firaSans font-bold text-white md:leading-relaxed leading-normal"
                  >
                    <span className="">From romantic dinners</span> <br />
                    <span className=" md:text-[39px] ">
                      to celebrations with
                      <span>&#39;</span>s{" "}
                      <span className="text-[#B22222]">friends,</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm md:text-base tracking-wider  text-[#e2e2e2] font-firaSans md:leading-normal leading-tight">
                      let us make your moments special with our world-class
                      culinary delights.
                    </p>
                    <BtnWithICon
                      classname={``}
                      icon={<FaArrowRight className="text-xl" />}
                      text={"Reserve now"}
                    ></BtnWithICon>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
