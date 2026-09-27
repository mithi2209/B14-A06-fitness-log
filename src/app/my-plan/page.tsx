"use client";

import PlanStats from "@/Components/my-plan-stats/PlanStats";
import PlanTabs from "@/Components/my-plan-stats/PlanTabs";
import EmptyPlanTab from "@/Components/my-plan-stats/EmptyPlanTab";
import SelectedPlansCard from "@/Components/my-plan-stats/SelectedPlansCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext ,useState } from "react";
import { PlanTab, SortOption } from '../Types/fitnessData';




const MyPlanPage = () => {
     const { addToPlan, savePlan } = useContext(workoutContext)! ;


    const [activeTab, setActiveTab] = useState<PlanTab>("today");

    const [sortBy, setSortBy] = useState<SortOption>("duration");


    

        let currentPlans;

            if (activeTab === "today") {

                currentPlans = addToPlan;

            } else {

                currentPlans = savePlan;

            }


        const sortedPlans = [...currentPlans];
        
        // Sort by Duration
        if (sortBy === "duration") {

            sortedPlans.sort((a, b) => {
            return Number(a.duration) - Number(b.duration);
            });

        }
        // Sort by Rating
        if (sortBy === "rating") {

            sortedPlans.sort((a, b) => {
            return Number(b.rating) - Number(a.rating);
            });

        }
     
        // Sort by Calories
        if (sortBy === "caloriesBurned") {

            sortedPlans.sort((a, b) => {
            return Number(b.caloriesBurned) - Number(a.caloriesBurned);
            });
        }
    
    return (
        <div>
            <PlanStats plans={currentPlans}></PlanStats>

            <PlanTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sortBy={sortBy}
                setSortBy={setSortBy}
            ></PlanTabs>

    
            {sortedPlans.length === 0 ? (

                <EmptyPlanTab
                        />

                    ) : (

                <SelectedPlansCard
                    plans={sortedPlans}
                    activeTab={activeTab}
                    />

           )}
     
          
      </div>  
    );
};

export default MyPlanPage;
