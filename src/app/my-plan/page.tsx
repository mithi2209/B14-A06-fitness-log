"use client";
import PlanStats from "@/Components/my-plan-stats/PlanStats";
import PlanTabs from "@/Components/my-plan-stats/PlanTabs";
import EmptyPlanTab from "@/Components/my-plan-stats/EmptyPlanTab";
import SelectedPlansCard from "@/Components/my-plan-stats/SelectedPlansCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext ,useState } from "react";
import { PlanTab, SortOption } from '../Types/fitnessData';
import SaveDataCard from '../../Components/my-plan-stats/SaveDataCard';




const MyPlanPage = () => {
     const { addToPlan, savePlan } = useContext(workoutContext) ;


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
            return Number(b.duration) - Number(a.duration);
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
            return Number(b.rating) - Number(a.rating);
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
                    activeTab={activeTab}
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
