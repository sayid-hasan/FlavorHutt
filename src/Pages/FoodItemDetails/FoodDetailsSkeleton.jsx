const FoodDetailsSkeleton = () => {
  return (
    <div className="bg-gray-300 flex justify-center items-center bg-cover bg-center min-h-screen max-w-7xl mx-auto rounded-lg font-frescha">
      <div className="w-4/5 mx-auto flex items-center md:items-stretch gap-2 flex-col md:flex-row-reverse justify-between overflow-hidden bg-white/60 md:bg-white/70 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 h-full">
        {/* Image Skeleton */}
        <div className="skeleton  bg-white w-full md:w-1/2 md:min-h-[500px] h-full rounded-lg"></div>

        {/* Content Skeleton */}
        <div className="p-6">
          {/* Category */}
          <div className="skeleton w-1/3 h-6 mb-2 bg-gray-300 rounded-md"></div>

          {/* Food Name Skeleton */}
          <div className="skeleton w-3/4 h-8 mb-4 bg-gray-300 rounded-md"></div>

          {/* Rating Skeleton */}
          <div className="flex justify-start items-center gap-2 mb-4">
            <div className="skeleton w-20 h-5 bg-gray-300 rounded-md"></div>
          </div>

          {/* Origin and Price Skeleton */}
          <div className="flex mt-2 font-bold font-Courgette justify-between items-center">
            <div className="skeleton w-20 h-5 bg-gray-300 rounded-md"></div>
            <div className="skeleton w-28 h-7 bg-gray-300 rounded-md"></div>
          </div>

          {/* Food Details Skeleton */}
          <div className="mt-2">
            <div className="skeleton w-3/4 h-5 bg-gray-300 rounded-md mb-2"></div>
            <div className="skeleton w-3/4 h-5 bg-gray-300 rounded-md mb-2"></div>
          </div>

          {/* Stock and Purchase Button Skeleton */}
          <div className="flex justify-between items-center my-3 w-full grow flex-1">
            <div className="skeleton w-32 h-6 bg-gray-300 rounded-md"></div>
            <div className="skeleton w-24 h-10 bg-gray-300 rounded-full"></div>
          </div>

          {/* Added By Section Skeleton */}
          <div className="mt-4">
            <div className="flex items-center">
              <div className="skeleton w-10 h-10 bg-gray-400 rounded-full"></div>
              <div className="skeleton w-24 h-5 mx-2 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
