import Image from "next/image";
import WorkoutEmptyPage from "../page";
import getAllLibraryData from "@/lib/page";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";
import AddToPlanBtn from "@/Components/addWorkoutPlanBtn/AddToPlanBtn";
import SaveLaterBtn from "@/Components/saveBtn/SaveLaterBtn";

interface IWorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  const { id } = await params;

  const workoutData = await getAllLibraryData();

  const workout = workoutData.find(
    (workout: IExerciseLibraryDataTypes) => String(workout.id) === String(id),
  );

  if (!workout) {
    return (
     <WorkoutEmptyPage></WorkoutEmptyPage>
    );
  }

  return (
    <div className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">
      <div className="shadow-xl rounded-2xl border border-[#222630]  px-2 py-7 lg:py-10 lg:px-7">
        <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:p-0">
          {/* Workout Image */}
          <div>
            <Image
              width={400}
              height={300}
              src={workout?.image}
              alt="Workout Image"
              className="h-full min-h-[350px] w-full rounded-2xl object-cover md:min-h-[500px]"
            />
          </div>

          {/* Workout Content */}
          <div className="flex flex-col lg:px-8 lg:py-1">
            {/* Title */}
            <h1 className="font-oswald text-xl md:text-2xl lg:text-[36px] font-bold uppercase text-white ">
              {workout.name}
            </h1>

            {/* Description */}
            <p className=" font-inter mt-2 text-sm md:text-base leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Categories */}
            <div className="mt-4 flex gap-2">
              {workout?.muscleGroups?.[0] && (
                <span className="rounded-full bg-[#B8FF00] px-4 py-1.5 text-sm font-medium text-black">
                  {workout.muscleGroups[0]}
                </span>
              )}
              {workout?.muscleGroups?.[1] && (
                <span className="rounded-full bg-[#B8FF00] px-4 py-1.5 text-sm font-medium text-black">
                  {workout.muscleGroups[1]}
                </span>
              )}
            </div>

            {/* Workout Information */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922] font-inter">
              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  EQUIPMENT
                </span>

                <span className="text-sm text-gray-200">
                  {workout?.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  DIFFICULTY
                </span>

                <span className="text-sm text-gray-200">
                  {workout?.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">SETS</span>

                <span className="text-sm text-gray-200">{workout?.sets}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">REPS</span>

                <span className="text-sm text-gray-200">{workout?.reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  DURATION
                </span>

                <span className="text-sm text-gray-200">
                  {workout?.duration}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">
                  CALORIES
                </span>

                <span className="text-sm text-gray-200">
                  {workout?.calories} kcal
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#232834] px-5 py-4">
                <span className="text-xs font-bold text-[#9CA3AF]">RATING</span>

                <span className="text-sm text-gray-200">{workout?.rating}</span>
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
                  <span>{workout?.instructions[0]}</span>
                </li>

                <li className="flex gap-3">
                  <span>2.</span>
                  <span>{workout?.instructions[1]}</span>
                </li>

                <li className="flex gap-3">
                  <span>3.</span>
                  <span>{workout?.instructions[2]}</span>
                </li>

                <li className="flex gap-3">
                  <span>4.</span>
                  <span>{workout?.instructions[3]}</span>
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <AddToPlanBtn workout={workout} />

              <SaveLaterBtn workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
