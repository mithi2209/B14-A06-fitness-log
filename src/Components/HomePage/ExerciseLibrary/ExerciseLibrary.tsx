import getAllLibraryData from "@/lib/page";
import AllLibraryCards from "./AllLibraryCards";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";


const ExerciseLibrary = async() => {

  const libraryData = await getAllLibraryData();
    
    return(

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
                            <AllLibraryCards
                        
                                key={data.id}
                                data ={ data }>

                            </AllLibraryCards>
                        );
                    })
               }
                
            </div>
        </div>
    );
};

export default ExerciseLibrary;