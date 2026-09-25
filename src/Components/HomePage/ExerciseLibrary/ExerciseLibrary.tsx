import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";
import ExerciseLibraryCards from "./ExerciseLibraryCards";

const getAllLibraryData = async () => {
     const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
     const data = await res.json();
     return(data);
}


const ExerciseLibrary = async() => {
   const libraryData = await getAllLibraryData();
   console.log(libraryData);

    return (
        <div className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16">
            {/* Heading */}
            <div className="text-center lg:text-left ">
                <h2 className="font-oswald font-bold text-2xl md:text-3xl text-white ">THE LIBRARY</h2>
                <p className="font-inter text-sm lg:text-base text-[#9CA3AF] mt-3">Twelve lifts covering every major muscle group.</p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
               {
                libraryData.map((data: IExerciseLibraryDataTypes) =>{
                    return(
                    <ExerciseLibraryCards 
                        key={data.id}
                        data ={ data }>
                    </ExerciseLibraryCards>
                    );
                })
               }
                
            </div>
        </div>
    );
};

export default ExerciseLibrary;