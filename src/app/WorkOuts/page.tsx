import Link from "next/link";
import React from "react";

const WorkoutEmptyPage = () => {
  return (
    <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-40">
      <div className="bg-[#111216] flex items-center justify-center rounded-xl  border border-dashed border-[#292D35] py-30">
        <div className="text-center">
          <h3 className="font-oswald tracking-wider text-xl font-bold uppercase text-white">
            NOTHING HERE YET
          </h3>

          <p className="mt-2 font-normal text-sm lg:text-base text-[#8A92A0]">
            Browse the library and add a Plan to see details.
          </p>

          <Link href="/">
                <button className="btn mt-5 rounded-full border-none bg-[#B6FF00] px-6 text-sm font-semibold text-black hover:bg-[#b5e243]">
                    Go to Library
                </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkoutEmptyPage;
