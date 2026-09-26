
"use client";

import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";
import { createContext, Dispatch, ReactNode, useState } from "react";

interface IWorkoutContext {
  addToTodaysPlan: IExerciseLibraryDataTypes[];
  setAddToTodaysPlan: Dispatch<
    React.SetStateAction<IExerciseLibraryDataTypes[]>
  >;

  saveForLaterPlan: IExerciseLibraryDataTypes[];
  setSaveForLaterPlan: Dispatch<
    React.SetStateAction<IExerciseLibraryDataTypes[]>
  >;
}


export const workoutContext = createContext<IWorkoutContext | null>(null);

const WorkoutProvider = ({ children}: { children: ReactNode }) => {

    const[addToTodaysPlan, setAddToTodaysPlan] = useState<
    IExerciseLibraryDataTypes[]
  >([]);
  
    const [saveForLaterPlan, setSaveForLaterPlan] = useState<
    IExerciseLibraryDataTypes[]
  >([]);

    const sharedWorkoutDataState = {

        addToTodaysPlan,

        setAddToTodaysPlan,

        saveForLaterPlan,

        setSaveForLaterPlan
    };
    return (
        <workoutContext.Provider value={sharedWorkoutDataState}>
            {children}
        </workoutContext.Provider>
    );
};

export default WorkoutProvider;