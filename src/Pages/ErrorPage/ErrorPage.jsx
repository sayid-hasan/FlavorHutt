import { Link, useNavigate, useRouteError } from "react-router-dom";
import animationData from "../../lotties/err-page.json";
import Lottie from "lottie-react";
import BtnWithICon from "../../Components/PrimaryButton/NormalBtn/BtnWithICon";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();
  // lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const err = useRouteError();
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 font-frescha ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-base text-[#B20000] font-bold">{err.status}</p>
            <h1 className="mt-3 text-2xl font-semibold text-[#c4bfbf] dark:text-white md:text-3xl">
              {err.statusText}
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn&#39;t exist.Here are
              some helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button onClick={() => navigate(-1)} className="0">
                {" "}
                <BtnWithICon
                  text={`Go Back`}
                  icon={<FaArrowLeft></FaArrowLeft>}
                  position="left"
                ></BtnWithICon>
              </button>

              <Link className="" to={"/"}>
                <BtnWithICon
                  text={`Take me Home`}
                  icon={<FaArrowRight></FaArrowRight>}
                ></BtnWithICon>
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <Lottie
              options={defaultOptions}
              animationData={animationData}
              height={400}
              width={400}
            ></Lottie>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
