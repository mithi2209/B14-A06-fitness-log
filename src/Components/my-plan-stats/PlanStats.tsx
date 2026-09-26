import { IExerciseLibraryDataTypes } from '../../app/Types/fitnessData';


interface PlanStatsProps {
  plans: IExerciseLibraryDataTypes[];
}

const PlanStats = ({
    plans ,
    }:PlanStatsProps) => {


        
        // Total exercises
        const totalExercises = plans.length;


        // Total minutes
        const totalMinutes = plans.reduce(
            (total, workout) =>
            total + Number(workout.duration || 0),
            0
        );


        // Total calories
        const totalCalories = plans.reduce(
            (total, workout) =>
            total +
            Number(workout.caloriesBurned || 0),
            0
        );

    return (
        <div className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">

            {/* Heading */}
            <div className=" text-center lg:text-left">
                <h2 className="font-oswald font-bold text-2xl md:text-3xl  text-white uppercase">
                MY PLAN
                </h2>

                <p className="mt-3 mx-auto w-[70%] md:w-full font-inter text-sm lg:text-base text-[#9CA3AF]">
                Cap of five lifts for today . Finish them , then load more.
                </p>
            </div>


            {/* Stats div */}
            <div className="card mt-14 py-5 px-6 rounded-2xl border border-[#232732] bg-[#13161D]">

                <div className="flex justify-center items-center ">

                    {/* Exercises */}
                    <div className="flex-1 px-6 py-6 md:border-r md:border-[#20232B] text-center md:text-left">
                        <p className="  font-inter text-sm text-[#8A92A0]">
                        Exercises
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold text-[#CCFF00]">
                       {totalExercises}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="flex-1 px-6 py-6 md:border-r md:border-[#20232B] text-center md:text-left">
                        <p className="font-inter text-sm text-[#8A92A0]">
                        Minutes
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold text-white">
                        {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex-1 px-6 py-6 text-center md:text-left">
                        <p className="font-inter text-sm text-[#8A92A0]">
                        Calories
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold text-white">
                        {totalCalories}
                        </p>
                    </div >

                </div>
            </div>
            
        </div>
    );
};

export default PlanStats;