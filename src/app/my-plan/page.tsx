"use client";

import PlanStats from "@/Components/my-plan-stats/PlanStats";
import PlanTabs from "@/Components/my-plan-stats/PlanTabs";
import EmptyPlanTab from "@/Components/my-plan-stats/EmptyPlanTab";
import SelectedPlansCard from "@/Components/my-plan-stats/SelectedPlansCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext ,useState } from "react";
import { PlanTab, SortOption } from '../Types/fitnessData';




const MyPlanPage = () => {
     const { addToPlan, savePlan , searchText} = useContext(workoutContext)! ;

    const [activeTab, setActiveTab] = useState<PlanTab>("today");

    const [sortBy, setSortBy] = useState<SortOption>("duration");


    

        let currentPlans;

            if (activeTab === "today") {

                currentPlans = addToPlan;

            } else {

                currentPlans = savePlan;

            }

            
         //  Search text 
        const trimSearchText = searchText.toLocaleLowerCase().trim() ;

        const plansAfterFilter = currentPlans.filter((workout)=>{

            const workoutName = workout.name.toLowerCase().trim();
            const equipmentName = workout.equipment.toLowerCase().trim();

            return (
                workoutName.includes(trimSearchText) ||
                equipmentName.includes(trimSearchText)
            );
        }); 

        // Sort By
        const sortedPlans = [...plansAfterFilter];
        
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



            {
                currentPlans.length === 0 ?(
                    <EmptyPlanTab></EmptyPlanTab>
                )
                :( plansAfterFilter.length === 0 
                    ? (
                        <div className="col-span-full py-16 text-center">
                                <h2 className="text-white font-oswald md:text-3xl text-2xl   font-bold"> 
                                Searched workout Not Found
                                </h2>

                                <p className="font-inter text-sm md:text-base text-[#9CA3AF]  mt-2">
                                    Try another workout name or muscle group.
                                </p>

                        </div>
                    ):(
                        <SelectedPlansCard
                            plans={sortedPlans}
                            activeTab={activeTab}>
                        </SelectedPlansCard>
                    )
                    
                )
            }

{/*     
            {sortedPlans.length === 0 ? (

                <EmptyPlanTab
                        />

                    ) : (

                <SelectedPlansCard
                    plans={plansAfterFilter}
                    activeTab={activeTab}
                    />

           )} */}
     
          
      </div>  
    );
};

export default MyPlanPage;
