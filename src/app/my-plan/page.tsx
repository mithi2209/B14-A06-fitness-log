"use client";
import PlanStats from "@/Components/my-plan-stats/PlanStats";
import PlanTabs from "@/Components/my-plan-stats/PlanTabs";
import EmptyPlanTab from "@/Components/my-plan-stats/EmptyPlanTab";
import SelectedPlansCard from "@/Components/my-plan-stats/SelectedPlansCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext ,useState } from "react";


const MyPlanPage = () => {
     const { addToPlan, savePlan } = useContext(workoutContext) as {
        addToPlan: IExerciseLibraryDataTypes[];
        savePlan: IExerciseLibraryDataTypes[];
  };



    
    
    return (
        <div>
            <PlanStats></PlanStats>
            <PlanTabs></PlanTabs>

    
            <EmptyPlanTab></EmptyPlanTab>
            <SelectedPlansCard></SelectedPlansCard>
          
      </div>  
    );
};

export default MyPlanPage;
