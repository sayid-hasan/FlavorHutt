import FoodCardSekeloton from "../Home/TopSix/FoodCardSekeloton";

const MyaddedFoodSkeleton = () => {
  return (
    <div>
      <div>
        {/* Content Skeleton */}
        <div className="md:my-8 my-4">
          <div className="text-center space-y-2">
            {/* Title Skeleton */}
            <div className="skeleton w-2/3 h-10 mx-auto bg-gray-300 rounded-md"></div>

            {/* Paragraph Skeleton */}
            <div className="skeleton w-3/4 h-6 mx-auto bg-gray-300 rounded-md"></div>

            {/* Search Bar Skeleton */}
          </div>
        </div>
      </div>
      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
        <FoodCardSekeloton></FoodCardSekeloton>
      </div>
    </div>
  );
};

export default MyaddedFoodSkeleton;
