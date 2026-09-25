import Image from "next/image";
import WorkoutImage from "@/assets/card-demo-img.png";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";

const WorkOutCardDetails = () => {
  return (
    <div className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">
      <div className="shadow-xl rounded-2xl border border-[#222630]  px-2 py-7 lg:py-10 lg:px-7">
        <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:p-0">
          {/* Workout Image */}
          <div>
            <Image
              src={WorkoutImage}
              alt="Barbell Bench Press"
              className="h-full min-h-[350px] w-full rounded-2xl object-cover md:min-h-[500px]"
            />
          </div>

          {/* Workout Content */}
          <div className="flex flex-col lg:px-8 lg:py-1">
            {/* Title */}
            <h1 className="font-oswald text-xl md:text-2xl lg:text-[36px] font-bold uppercase text-white ">
              Barbell Bench Press
            </h1>

            {/* Description */}
            <p className=" font-inter mt-2 text-sm md:text-base leading-6 text-gray-400">
              A compound press that builds chest thickness, triceps, and
              pressing power <br /> from a stable bench.
            </p>

            {/* Categories */}
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-[#B8FF00] px-4 py-1.5 text-sm font-medium text-black">
                Chest
              </span>

              <span className="rounded-full bg-[#B8FF00] px-4 py-1.5 text-sm font-medium text-black">
                Arms
              </span>
            </div>

            {/* Workout Information */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922] font-inter">
              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  EQUIPMENT
                </span>

                <span className="text-sm text-gray-200">Barbell, Bench</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  DIFFICULTY
                </span>

                <span className="text-sm text-gray-200">Intermediate</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">SETS</span>

                <span className="text-sm text-gray-200">4</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">REPS</span>

                <span className="text-sm text-gray-200">6-8</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  DURATION
                </span>

                <span className="text-sm text-gray-200">25 min</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  CALORIES
                </span>

                <span className="text-sm text-gray-200">180 kcal</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">RATING</span>

                <span className="text-sm text-gray-200">4.8</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="font-inter text-base font-extrabold uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-3 font-inter space-y-3 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span>1.</span>
                  <span>
                    Lie on the bench with eyes under the bar and feet planted.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>2.</span>
                  <span>
                    Unrack with locked elbows and lower the bar to mid-chest.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>3.</span>
                  <span>
                    Press up in a slight arc until elbows lock without bouncing.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>4.</span>
                  <span>
                    Keep shoulder blades pinched and a natural arch in the back.
                  </span>
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="btn border-0 rounded-xl bg-[#B8FF00] text-black hover:bg-[#a8eb00]">
                <FaRegCalendarPlus size={16} />
                Add to today's plan
              </button>

              <button className="btn btn-outline rounded-xl border-[#232834] text-gray-300 hover:border-[#B8FF00] hover:bg-transparent">
                <FaRegBookmark size={16} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutCardDetails;
