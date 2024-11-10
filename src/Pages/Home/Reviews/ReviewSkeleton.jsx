const ReviewSkeleton = () => {
  const topReviews = [1, 2, 3, 4, 5, 6];
  return (
    <div className="overflow-hidden my-8">
      {/* Skeleton for Reviews (if topReviews are empty) */}
      <div className="flex gap-4 justify-center">
        {topReviews.map((review) => (
          <div key={review}>
            {/* review card skeleton */}
            <div className="skeleton rounded-lg w-full max-w-[24rem] overflow-hidden card shadow-none">
              {/* Skeleton for Card Header */}
              <div className="skeleton w-full h-[100px] bg-gray-300 rounded-t-md"></div>

              {/* Skeleton for Avatar */}
              <div className="flex items-center gap-4 pt-0 pb-8 mx-0">
                <div className="skeleton w-20 h-20 rounded-full bg-gray-300"></div>
                <div className="flex w-full flex-col gap-0.5 font-firaSans">
                  <div className="flex items-center justify-between">
                    <div className="skeleton w-24 h-6 bg-gray-300"></div>{" "}
                    {/* Placeholder for Name */}
                    <div className="skeleton w-20 h-6 bg-gray-300"></div>{" "}
                    {/* Placeholder for Rating */}
                  </div>
                  <div className="skeleton w-32 h-4 bg-gray-300"></div>{" "}
                  {/* Placeholder for Designation */}
                </div>
              </div>

              {/* Skeleton for Card Body */}
              <div className="mb-6 p-0">
                <div className="skeleton w-full h-20 bg-gray-300"></div>{" "}
                {/* Placeholder for Review */}
              </div>
            </div>
            {/* end of review card skeleton */}
          </div>
        ))}
      </div>

      {/* Skeleton for Navigation Buttons */}
      <div className="mt-5 text-center text-[#ff7f50] flex text-3xl justify-center items-center gap-4">
        <button>
          <div className="skeleton w-[40px] h-[40px] rounded-full"></div>
        </button>
        <button>
          <div className="skeleton w-[40px] h-[40px] rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
