const GalleryPageSkeleton = () => {
  return (
    <div>
      <div>
        {/* Parallax Background Skeleton */}
        <div className="skeleton bg-gray-300 text-center text-3xl md:text-3xl lg:text-5xl tracking-[2px] text-white flex justify-center font-black items-center rounded-md min-h-[200px] md:min-h-[500px]">
          <div className="skeleton bg-gray-400 w-3/4 h-12 mx-auto rounded-[16px]"></div>
        </div>

        {/* Content Skeleton */}
        <div className="md:my-8 my-4">
          <div className="text-center space-y-2">
            {/* Title Skeleton */}
            <div className="skeleton w-2/3 h-10 mx-auto bg-gray-300 rounded-md"></div>

            {/* Paragraph Skeleton */}
            <div className="skeleton w-3/4 h-6 mx-auto bg-gray-300 rounded-md"></div>
          </div>
        </div>
        <div className="grid  lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
          <div className="min-h-[270px] w-full bg-gray-300 rounded-lg animate-pulse skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPageSkeleton;
