const LibraryDataLoading = () => {
  return (
    <div className="mx-4 md:mx-6 lg:mx-9 my-10 md:my-14 lg:my-16 animate-pulse">
      {/* Heading */}
      <div className="text-center">
        <div className="h-8 w-40 bg-[#222630] rounded-md mx-auto"></div>

        <div className="h-4 w-72 bg-[#222630] rounded-md mx-auto mt-3"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-xl rounded-2xl border border-[#222630] bg-[#15171D]"
          >
            {/* Image */}
            <div className="w-full h-52 bg-[#222630]"></div>

            {/* Card Content */}
            <div className="space-y-5 px-7 py-7">
              {/* Muscle Groups */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-8 w-20 bg-[#222630] rounded-full"></div>

                <div className="h-8 w-24 bg-[#222630] rounded-full"></div>
              </div>

              {/* Name + Equipment */}
              <div className="text-center lg:text-left">
                <div className="h-6 w-40 bg-[#222630] rounded-md mx-auto lg:mx-0"></div>

                <div className="h-4 w-28 bg-[#222630] rounded-md mt-3 mx-auto lg:mx-0"></div>
              </div>

              {/* Divider */}
              <div className="border border-[#222630]"></div>

              {/* Time / Calories / Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-5">
                <div className="h-5 w-16 bg-[#222630] rounded-md"></div>

                <div className="h-5 w-20 bg-[#222630] rounded-md"></div>

                <div className="h-5 w-12 bg-[#222630] rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryDataLoading;
