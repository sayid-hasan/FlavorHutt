import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/Images/carousol2.jpg";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import Lottie from "lottie-react";
import animationData from "../../lotties/reg-page.json";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    setLoading,
    user,
    setUser,
    createUser,
    updateUserProfile,
    signInWithFacebook,
    signInWithGoogle,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, name, password, image } = data;

    // console.log(email, username, password, image);
    const from = "/";
    // creating user
    createUser(email, password)
      .then((res) => {
        toast.success("registered successfully");
        console.log(res.user);

        updateUserProfile(name, image)
          .then(() => {})
          .catch((err) => console.log(err));

        setUser({ ...user, displayName: name, photoURL: image });

        navigate(from);
      })
      .catch(() => {
        toast.error("user exist already");
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

  // lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const subscription = watch(() => {
      // console.log(data);
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
      <Helmet>
        <title>Register your account</title>
      </Helmet>
      <div className="lg:max-w-4xl md:max-w-3xl max-w-md rounded-lg w-full md:bg-white/10 backdrop-blur-md mx-auto overflow-x-hidden font-firaSans  ">
        <div className="flex  flex-col-reverse md:flex-row  md:justify-between ">
          {" "}
          <div className="w-full my-5  md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-font-oswald text-white font-bold text-center">
              Sign Up for more amazing features
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              {/* Name */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="email"
                  className="block dark:text-gray-600 text-white font-bold tracking-widest"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full text-[#938e8e] px-4 py-3 rounded-md focus:border-[#B20000] bg-white"
                />
                <span className="font-semibold text-white font-frescha tracking-wide">
                  {errors.name?.type === "required" && "Name is required"}
                </span>
              </div>
              {/* email */}
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
                  className="w-full text-[#938e8e] px-4 py-3 rounded-md focus:border-[#B20000] bg-white"
                />
                <span className="font-semibold text-white font-frescha tracking-wide">
                  {errors.email?.type === "required" && "Email is required"}
                </span>
              </div>
              {/* password */}
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
                      pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{6,}$/,
                    })}
                    placeholder="Password"
                    className="w-full text-[#938e8e] px-4 py-3 rounded-md focus:border-[#B20000]  bg-white"
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
                <span className="font-semibold text-white font-frescha tracking-wide">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "pattern" &&
                    "Password must have at least one uppercase letter, one special character and at least one digit, and be at least 6 characters long"}
                </span>
              </div>
              {/* photo URL */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="email"
                  className="block dark:text-gray-600 text-white font-bold tracking-widest"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  {...register("image", { required: true })}
                  placeholder="Image URL"
                  className="w-full text-[#938e8e] px-4 py-3 rounded-md focus:border-[#B20000] bg-white"
                />
                <span className="font-semibold text-white font-frescha tracking-wide">
                  {errors.image?.type === "required" && "Photo URL is required"}
                </span>
              </div>

              <button
                type="submit"
                className=" flex justify-center items-center flex-1 grow w-full"
              >
                <GlassmorphismButton
                  containerClassName={`w-full`}
                  text="Get Registered"
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
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-337 273 123.5 256"
                    xmlSpace="preserve"
                    className="fill-current"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path>{" "}
                    </g>
                  </svg>
                </div>
              </button>
            </div>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="underline dark:text-gray-800 mx-3 text-[#B20000] font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Lottie options={defaultOptions} height={400} width={4000}></Lottie>
          </div>
        </div>

        {/* <ToastContainer></ToastContainer> */}
      </div>
    </div>
  );
};

export default RegisterPage;
