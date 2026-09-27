
import getAllLibraryData from "@/lib/page";
import AllLibraryCards from '@/Components/HomePage/ExerciseLibrary/AllLibraryCards';
import { IExerciseLibraryDataTypes } from '../Types/fitnessData';


const WorkoutPage = async() => {

  const workoutData = await getAllLibraryData();

  return (

    <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">
       {/* Heading */}
        <div className="text-center  ">
                <h2 className="font-oswald font-bold text-2xl md:text-3xl text-white ">All Workouts</h2>
                <p className="font-inter text-sm lg:text-base text-[#9CA3AF] mt-3">Explore every workout for major muscle group.</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            {
              workoutData.map((data: IExerciseLibraryDataTypes) =>{
                return(
                  <AllLibraryCards
                    key={data.id}
                    data ={ data }>

                    </AllLibraryCards>
                  );
              })
            }
          
        </div>
        
    </section>
  );
};

export default WorkoutPage;
