

"use client";

import { useContext } from "react";
import AllLibraryCards from "./AllLibraryCards";
import { workoutContext } from "@/context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";

interface LibrarySearchProps{
    libraryData:IExerciseLibraryDataTypes[];
}

const LibrarySearch = ({ libraryData }:LibrarySearchProps) => {

    const {searchText} =  useContext(workoutContext) !;

    const searchTextTrimmed = searchText.toLocaleLowerCase().trim() ;

    const workoutsAfterFilter = libraryData.filter((data)=>{

        const workoutName = data.name.toLowerCase().trim();
        const muscleGroups = data.muscleGroups.join(" ").toLowerCase().trim();

        return (
            workoutName.includes(searchTextTrimmed) ||
             muscleGroups.includes(searchTextTrimmed)
        );
    });

    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 
        mt-10" >


            {   workoutsAfterFilter.length === 0  
                    ?(
                        <div className="col-span-full py-16 text-center">
                            <h2 className="text-white font-oswald text-3xl   font-bold"> 
                               Searched workOut Not Found
                            </h2>

                            <p className="font-inter text-[#9CA3AF]  mt-2">
                                Try another workout name or muscle group.
                            </p>

                        </div>
                    )
                    :(
                        workoutsAfterFilter.map((data) => (
                            <AllLibraryCards
                               key={data.id} 
                               data={data}
                                >

                            </AllLibraryCards>
                        ))
                    )
                
                    

            }
            
        </div>
    );
};

export default LibrarySearch;