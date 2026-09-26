
"use client";

import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";
import { createContext ,ReactNode, useState } from "react";




export const workoutContext = createContext({});

const WorkoutProvider = ({ children}: { children: ReactNode }) => {

    const[addToPlan, setAddToPlan] = useState<
        IExerciseLibraryDataTypes[]
    >([]);
  
    const [savePlan, setSavePlan] = useState<
    IExerciseLibraryDataTypes[]
  >([]);

    const sharedWorkoutDataState = {

        addToPlan,
        setAddToPlan,
        savePlan,
        setSavePlan
    };

    return (
        <workoutContext.Provider value={sharedWorkoutDataState}>
            {children}
        </workoutContext.Provider>
    );
};


export const useWorkout = () => {
  const context = useContext(workoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};

export default WorkoutProvider;