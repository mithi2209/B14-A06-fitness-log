import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { workoutContext } from "../../context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from "../../app/Types/fitnessData";
import Link from "next/link";
import { toast } from "react-toastify";

import { PlanTab } from "@/app/Types/planTypes";

interface SelectedPlansCardProps {
  plans: IExerciseLibraryDataTypes[];
  activeTab: PlanTab;
}

const SelectedPlansCard = ({ plans, activeTab }: SelectedPlansCardProps) => {
  const { setAddToPlan, setSavePlan } = useContext(workoutContext);

  const [alreadyDoneIds, setAlreadyDoneIds] = useState<
    IExerciseLibraryDataTypes["id"][]
  >([]);

  // mark as done
  const handleMarkAsDone = (workout: IExerciseLibraryDataTypes) => {
    const marked = alreadyDoneIds.includes(workout.id);

    if (marked) {
      toast.info(`'${workout.name}' is already marked as done.`);

      return;
    }

    setAlreadyDoneIds([...alreadyDoneIds, workout.id]);
    toast.success(`'${workout.name}' marked as done!`);
  };

  const handleRemove = (workout: IExerciseLibraryDataTypes) => {
    if (activeTab === "today") {
      setAddToPlan((prev) => {
        return prev.filter((item) => item.id !== workout.id);
      });
    } else {
      setSavePlan((prev) => {
        return prev.filter((item) => item.id !== workout.id);
      });
    }

    // toast to remove

    setAlreadyDoneIds((prev) => {
      return prev.filter((id) => id !== workout.id);
    });
    toast.warning(`'${workout.name}' is removed from plans.`);
  };

  return (
    <section className="mx-4 md:mx-6 lg:mx-9 my-10 md:my-14 lg:my-16">
      <div className="grid grid-cols-1 gap-5">

        {   plans.map((workout) => {

            const isDone = alreadyDoneIds.includes(workout.id);

          return (
            <div
              key={workout.id}
              className="card w-full bg-[#15181e] border border-[#292e38] rounded-2xl">

              <div className="card-body p-4 sm:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  {/* Exercise Image */}
                  <Image
                    width={400}
                    height={200}
                    src={workout.image}
                    alt="exercise image"
                    className="
                      w-full
                      h-50
                      sm:h-52
                      md:w-40 md:h-32
                      lg:w-44 lg:h-24
                      object-cover rounded-2xl"
                  />

                  {/* Exercise Information */}
                  <div className="flex-1">
                    {/* Name */}
                    <h2 className="text-white text-lg md:text-base  lg:text-xl font-bold md:font-medium lg:font-bold uppercase">
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
                  <div className="flex items-center  gap-4 md:gap-2 lg:gap-4">

                    {/* View Details */}
                    <Link href={`/WorkOuts/${workout.id}`}>
                      <button className="btn btn-outline border-[#39404d] text-gray-200 rounded-full px-3 lg:px-6 hover:text-black">
                        View Details
                      </button>
                    </Link>

                    {/* Mark as Done */}
                    <button
                      onClick={() => handleMarkAsDone(workout)}
                      disabled={isDone}
                      className={`btn border-none shadow-none rounded-full px-3 lg:px-6
                            ${
                              isDone
                                ? "bg-[#4D5B2E] text-gray-300 cursor-not-allowed"
                                : "bg-[#B6FF00] hover:bg-[#b5e243] text-black"
                            }
                          `}
                        >
                      {isDone ? "✓ Exercise Done" : "✓ Mark as Done"}
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => handleRemove(workout)}
                      className="btn btn-ghost btn-circle text-gray-400 text-xl lg:text-2xl" >
                      <RxCross1 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedPlansCard;
