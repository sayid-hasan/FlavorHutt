const FoodCardSekeloton = () => {
  return (
    <div className="w-full cursor-pointer transition transform hover:scale-105 duration-300  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 animate-pulse">
      {/* Skeleton Image */}
      <div className="skeleton object-cover object-center w-full h-56  transition duration-100"></div>

      {/* Skeleton Category Header */}
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <div className="skeleton h-5 w-48"></div>
      </div>

      <div className="px-6 py-4">
        {/* Skeleton Food Name & Price */}
        <div className="flex justify-between items-center mb-2">
          <div className="skeleton h-6 w-1/2"></div>
          <div className="skeleton h-6 w-16"></div>
        </div>

        {/* Skeleton Description */}
        <div className="space-y-2 mb-4">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
        </div>

        {/* Skeleton Button */}
        <div className="flex justify-center items-center">
          <div className="skeleton h-[40px] w-[200px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSekeloton;
