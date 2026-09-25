import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import CardImg from "@/assets/card-demo-img.png";

const ExerciseLibraryCards = () => {
  return (
    <div className=" overflow-hidden shadow-xl rounded-2xl border border-[#222630] bg-[#15171D]">
      <div className="overflow-hidden">
        <Image
          className=" block rounded-t-2xl  w-full object-cover"
          src={CardImg}
          alt="card image"
        ></Image>
      </div>

        <div className="space-y-5 px-7 py-7 ">

            <div className="flex items-center justify-center lg:justify-start  gap-3" >
                <div className="rounded-full px-3 py-1.5 bg-[#C2F800] cursor-pointer hover:bg-lime-300">
                    <span className="text-sm font-inter font-bold text-[#000000] text-center">CHEST</span>
                </div>

                <div className="rounded-full px-3 py-1.5 bg-[#C2F800] cursor-pointer hover:bg-lime-300">
                    <span className="text-sm font-inter font-bold text-[#000000] text-center">ARMS</span>
                </div>
            </div>

            <div className="text-center lg:text-left  ">
                <h3 className="font-oswald font-bold text-lg lg:text-xl text-white tracking-wide">
                    BARBELL BENCH PRESS
                </h3>
                <p className="mt-2 font-inter text-sm md:text-base text-[#9CA3AF]">
                    Barbell, Bench
                </p>
            </div>

            <div className="border border-[#222630]"></div>
            

            <div className="font-inter text-sm md:text-base text-[#9CA3AF] flex items-center justify-center lg:justify-start   gap-5  ">
                <div className="flex items-center gap-1">
                    <IoMdTime />
                    <p>25 min</p>
                </div>
                <div className="flex items-center gap-1">
                    <GoFlame />
                    <p>180 Kcal</p>
                </div>

                <div className="flex items-center gap-1">
                    <FaRegStar />
                    <p>4.8</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ExerciseLibraryCards;
