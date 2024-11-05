import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

import Lottie from "lottie-react";
import animationData from "../../lotties/login-page-lottie.json";
import bgImg from "../../assets/Images/carousol1.jpg";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";

const LoginPage = () => {
  const { loginUser, signInWithFacebook, signInWithGoogle, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  //console.log(location);
  // lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    // login

    //login

    loginUser(email, password)
      .then(() => {
        toast.success("logged in successfully");

        // redirect to location
        navigate(location?.state || "/");
      })
      .catch(() => {
        toast.error("incorrect email or password");
      });
  };
  // social login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        //const user = result.user;
        toast.success(`welcome back ${result.user.displayName}`);
        // redirect to location
        navigate(location?.state || "/");
        //console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        setLoading(false);
      });
  };
  // facebook login
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        //const user = result.user;
        toast.success(`welcome back ${result.user.displayName}`);
        // redirect to location
        navigate(location?.state || "/");
        //console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        setLoading(false);
      });
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
      <div className="max-w-4xl rounded-lg w-full md:bg-white/40 backdrop-blur-md mx-auto overflow-x-hidden font-firaSans">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="flex  flex-col-reverse md:flex-row  md:justify-between ">
          <div className="w-full my-5  md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl md:text-4xl font-frescha text-[#B20000] font-bold text-center">
              Log into your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="email"
                  className="block dark:text-gray-600 text-white font-bold tracking-widest"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md focus:border-[#ff7f50] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-white"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="password"
                  className="block dark:text-gray-600 text-white font-bold tracking-widest"
                >
                  Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    })}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-white rounded-md focus:border-[#ff7f50]   "
                  />
                  <div
                    className="absolute right-0 -translate-x-3 "
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <FaEyeSlash className="text-[#B20000]"></FaEyeSlash>
                    ) : (
                      <FaEye className="text-[#B20000]"></FaEye>
                    )}
                  </div>
                </div>
                <span className="font-semibold text-red-600">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "pattern" &&
                    "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long"}
                </span>
              </div>
              <button
                type="submit"
                className=" flex justify-center items-center flex-1 grow w-full"
              >
                <GlassmorphismButton
                  containerClassName={`w-full`}
                  text="Sign In"
                  className={` md:h-[50px] w-full grow flex-1 `}
                ></GlassmorphismButton>
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              <div className="">
                <div className="px-3 text-base font-frescha font-bold text-white tracking-[1px] divider divider-error">
                  Login with social accounts
                </div>
              </div>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  handleGoogleLogin();
                }}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <div className="h-16 aspect-square rounded-full border-[1px] flex justify-center items-center border-[#B20000] hover:bg-[#B20000] hover:border-white text-[#ff7f50] hover:scale-105 hover:text-white transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </div>
              </button>

              <button
                onClick={() => {
                  handleFacebookLogin();
                }}
                aria-label="Log in with GitHub"
                className="p-3 rounded-sm"
              >
                <div className="h-16 aspect-square rounded-full border-[1px] flex justify-center items-center border-[#B20000] hover:bg-[#B20000] hover:border-white text-[#ff7f50] hover:scale-105 hover:text-white transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-white">
              Don&#39;t have an account?
              <Link
                to="/register"
                className="underline dark:text-gray-800 mx-3 text-[#ff7f50] font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
          {/* <ToastContainer></ToastContainer> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
