

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

    const workoutsAfterFilter = libraryData.filter((data)=>{

        return data.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
    });

    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10" >

            {
                workoutsAfterFilter.map((data: IExerciseLibraryDataTypes) =>{
                    return(
                        <AllLibraryCards
                        
                            key={data.id}
                            data={data}>

                        </AllLibraryCards>
                        );
                    })
            }
            
        </div>
    );
};

export default LibrarySearch;