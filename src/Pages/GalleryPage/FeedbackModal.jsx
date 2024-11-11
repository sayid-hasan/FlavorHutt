import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import GlassmorphismButton from "../../Components/PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";
import useAxios from "../../Hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const FeedbackModal = ({ setIsOpen }) => {
  const { user } = useContext(AuthContext);
  const axiosNonSecure = useAxios();
  const { mutateAsync } = useMutation({
    mutationFn: async ({ feedbackData }) => {
      const { data } = await axiosNonSecure.post("/feedback", feedbackData);
      console.log("inside use mutation in feedback gallery modal", data);
    },
    onSuccess: () => {
      toast.success("Thanks for your feedback");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error("Failed to add feedback", error);
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, imageUrl, feedback } = data;
    const feedbackData = { name, imageUrl, feedback };
    // send data on feedback
    console.log(feedbackData);
    mutateAsync({ feedbackData });
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
        <title>submit your feedback</title>
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

          <div className="relative backdrop-blur-md bg-white/90  inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform  rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-md sm:p-6 sm:align-middle">
            <h3
              className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
              id="modal-title"
            >
              Your Moments
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
              {/* User name read only */}
              <div className="space-y-1  text-sm">
                <label
                  htmlFor="name"
                  className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={user?.displayName}
                  {...register("name", { required: true, readOnly: true })}
                  className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] bg-[#e2e2e2] dark:text-gray-800 focus:dark:border-violet-600 "
                />
              </div>

              {/* feed back */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="feedback"
                  className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
                >
                  Your Experience
                </label>
                <input
                  type="text"
                  name="feedback"
                  id="feedback"
                  placeholder="Share your experience"
                  {...register("feedback", { required: true })}
                  className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] bg-[#e2e2e2] dark:text-gray-800 focus:dark:border-violet-600 "
                />
              </div>

              {/* image Url */}
              {/* feed back */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="imageUrl"
                  className="block dark:text-gray-600 text-[#ff7f50] font-bold tracking-widest"
                >
                  Your Moments
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="https://yourimage.com"
                  {...register("imageUrl", { required: true })}
                  className="w-full px-4 py-3 text-[#938e8e] rounded-md focus:border-[#ff7f50] bg-[#e2e2e2] dark:text-gray-800 focus:dark:border-violet-600 "
                />
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
                  <GlassmorphismButton text="share"></GlassmorphismButton>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
