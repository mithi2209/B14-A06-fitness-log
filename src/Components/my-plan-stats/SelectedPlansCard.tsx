import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { useContext ,useState } from "react";
import { workoutContext } from "../../context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from '../../app/Types/fitnessData';
import Link from 'next/link';


const SelectedPlansCard = ()=> {

    const { addToPlan ,savePlan } = useContext(workoutContext) as {
      addToPlan: IExerciseLibraryDataTypes[];
      savePlan: IExerciseLibraryDataTypes[];
  };
 
  return (
    // <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">
    //   <div className="grid grid-cols-1 gap-5">

    //          <div className="card w-full bg-[#15181e] border border-[#292e38] rounded-2xl">

    //              <div className="card-body p-4 sm:p-5">

    //         <div className="flex flex-col md:flex-row md:items-center gap-5">
    //           {/* Exercise Image */}
    //           <Image
    //             src={CardImg}
    //             alt="exercise image"
    //             className="
    //                 w-full
    //                 h-50
    //                 sm:h-52
    //                 md:w-40 md:h-24
    //                 lg:w-44 lg:h-24
    //                 object-cover rounded-2xl"
    //             />

    //           {/* Exercise Information */}
    //           <div className="flex-1">
    //             {/* Name */}
    //             <h2 className="text-white text-lg md:text-xl font-bold uppercase">
    //               RUSSIAN TWIST
    //             </h2>

    //             {/* Type */}
    //             <p className="text-gray-400  text-sm md:text-base font-medium mt-1 ">Medicine Ball</p>

    //             {/* Exercise Details */}
    //             <div className="flex flex-wrap items-center gap-5 md:gap-3 lg:gap-5 mt-2">

    //               {/* Duration */}
    //               <div className="flex items-center gap-2 text-gray-300">
    //                 <span className="text-lime-400 cccc">
    //                   <IoMdTime />
    //                 </span>
    //                 <span>8 min</span>
    //               </div>

    //               {/* Calories */}
    //               <div className="flex items-center gap-2 text-gray-300">
    //                 <span className="text-lime-400 text-sm lg:text-xl">
    //                   <GoFlame />
    //                 </span>
    //                 <span>70 kcal</span>
    //               </div>

    //               {/* Rating */}
    //               <div className="flex items-center gap-2 text-gray-300">
    //                 <span className="text-lime-400 text-sm lg:text-xl">
    //                   <FaRegStar />
    //                 </span>
    //                 <span>4.1</span>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Buttons */}
    //           <div className="flex items-center gap-4">
    //             {/* View Details */}
    //             <button className="btn btn-outline border-[#39404d] text-gray-200 rounded-full px-3 lg:px-6 hover:text-black">
    //               View Details
    //             </button>

    //             {/* Mark as Done */}
    //             <button className="btn bg-[#B6FF00] hover:bg-[#b5e243] text-black border-none rounded-full px-3 lg:px-6">
    //               ✓ Mark as Done
    //             </button>

    //             {/* Close Button */}
    //             <button className="btn btn-ghost btn-circle text-gray-400 text-xl lg:text-2xl">
    //               <RxCross1 />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //           </div>

    //   </div>
    // </section>

    <section className="mx-4 md:mx-6 lg:mx-9 my-10 md:my-14 lg:my-16">

      <div className="grid grid-cols-1 gap-5">

        {
         addToPlan.map((workout) => (

          <div
            key={workout.id}
            className="card w-full bg-[#15181e] border border-[#292e38] rounded-2xl"
          >
            <div className="card-body p-4 sm:p-5">
             <div className="flex flex-col md:flex-row md:items-center gap-5">
              {/* Exercise Image */}
              <Image
                width={100}
                height={200}
                src={workout.image}
                alt="exercise image"
                className="
                    w-full
                    h-50
                    sm:h-52
                    md:w-40 md:h-24
                    lg:w-44 lg:h-24
                    object-cover rounded-2xl"
                />

              {/* Exercise Information */}
              <div className="flex-1">
                {/* Name */}
                <h2 className="text-white text-lg md:text-xl font-bold uppercase">
                  {workout.name}
                </h2>

                {/* Type */}
                <p className="text-gray-400  text-sm md:text-base font-medium mt-1 ">
                  {workout.equipment}

                </p>

                {/* Exercise Details */}
                <div className="flex flex-wrap items-center gap-5 md:gap-3 lg:gap-5 mt-2">

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-lime-400 cccc">
                      <IoMdTime />
                    </span>
                    <span>{workout.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-lime-400 text-sm lg:text-xl">
                      <GoFlame />
                    </span>
                    <span>{workout.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-lime-400 text-sm lg:text-xl">
                      <FaRegStar />
                    </span>
                    <span>{workout.rating}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* View Details */}
                <Link href={`/WorkOuts/${workout.id}`}>
                  <button className="btn btn-outline border-[#39404d] text-gray-200 rounded-full px-3 lg:px-6 hover:text-black">
                  View Details
                  </button>
                </Link>


                {/* Mark as Done */}
                <button className="btn bg-[#B6FF00] hover:bg-[#b5e243] text-black border-none rounded-full px-3 lg:px-6">
                  ✓ Mark as Done
                </button>

                {/* Close Button */}
                <button className="btn btn-ghost btn-circle text-gray-400 text-xl lg:text-2xl">
                  <RxCross1 />
                </button>
              </div>
            </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SelectedPlansCard;


