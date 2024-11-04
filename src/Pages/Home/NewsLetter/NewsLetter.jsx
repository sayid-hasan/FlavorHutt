import { toast } from "react-toastify";

import { FaArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    if (email) {
      toast.success("Thank you for subscribing to our newsletter");
      e.target.email.value = "";
    }
  };
  return (
    <div>
      <section className="flex flex-col font-frescha  overflow-x-hidden  bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 my-10">
        <div className="flex items-center justify-center w-full md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0 text-center md:text-left">
            <h2 className="md:text-2xl text-lg mb-5 font-font-oswald font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For <span className="text-[#ff7f50]">Any</span>
              Updates
            </h2>

            <p className="mt-2 text-sm text-[#454545] dark:text-gray-400 md:text-gray-400 md:leading-loose md:tracking-wider">
              By Subscribing to our page you are going to get any new dishes and
              branch related update and so many more amazing recipes
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between items-center p-1.5 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#B20000] focus-within:ring-[#B20000]">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button
                type="submit"
                className={`btn   border-transparent hover:bg-[#B22222] hover:border-[#ff7f50]  bg-[#ff7f50] text-white font-bold px-4  md:py-4 py-2 text-sm max-w-[180px]   group transition duration-300 $`}
              >
                <span className="flex flex-row items-center justify-center group-hover:translate-x-2 transition duration-300  gap-2  ">
                  {"Subscribe"}
                  <FaArrowRight></FaArrowRight>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
