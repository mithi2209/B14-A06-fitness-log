import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";


type TDataCardsProps = IExerciseLibraryDataTypes;

const ExerciseLibraryCards = ({ data }: { data: TDataCardsProps }) => {
  return (
    <div className=" overflow-hidden shadow-xl rounded-2xl border border-[#222630] bg-[#15171D]">
      <div className="overflow-hidden">
        <Image
            className=" block w-full h-52 rounded-t-2xl object-cover"
            width={400}
            height={200}
            src={data.image}
            alt="card image"
        ></Image>
      </div>

        <div className="space-y-5 px-7 py-7 ">

            <div className="flex items-center justify-center lg:justify-start  gap-3" >
                {
                    data?.muscleGroups?.[0] && (
                        <div className="rounded-full px-3 py-1.5 bg-[#C2F800] cursor-pointer hover:bg-lime-300">

                            <span className="text-sm font-inter font-bold text-[#000000] text-center">
                                {data.muscleGroups[0]}

                            </span>
                        </div>
                    )
                }

                {
                    data?.muscleGroups?.[1] && (
                        <div className="rounded-full px-3 py-1.5 bg-[#C2F800] cursor-pointer hover:bg-lime-300">
                            <span className="text-sm font-inter font-bold text-[#000000] text-center">
                            {data?.muscleGroups[1]}
                            </span>
                    </div>
                    )
                }
            </div>

            <div className="text-center lg:text-left  ">
                <h3 className="font-oswald font-bold text-lg lg:text-xl text-white tracking-wide">
                    {data?.name}
                </h3>
                <p className="mt-2 font-inter text-sm md:text-base text-[#9CA3AF]">
                   {data?.equipment}
                </p>
            </div>

            <div className="border border-[#222630]"></div>
            

            <div className="font-inter text-sm md:text-base text-[#9CA3AF] flex items-center justify-center lg:justify-start   gap-5  ">
                <div className="flex items-center gap-2">
                    <IoMdTime className="text-xl" />
                    <p>{data.duration}min</p>
                </div>
                <div className="flex items-center gap-2">
                    <GoFlame className="text-xl"/>
                    <p>{data.caloriesBurned}Kcal</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaRegStar className="text-xl" />
                    <p>{data.rating}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ExerciseLibraryCards;
