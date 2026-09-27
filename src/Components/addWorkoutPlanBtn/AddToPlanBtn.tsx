
"use client";

import {toast} from "react-toastify";
import { useContext} from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { workoutContext } from "@/context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";


interface IAddToPlanBtnProps {
    workout: IExerciseLibraryDataTypes;
};



const AddToPlanBtn = ({ workout }: IAddToPlanBtnProps) => {

    const { addToPlan, setAddToPlan } = useContext(workoutContext)!;


    const alreadyAdded = addToPlan.find((item) => item.id === workout.id);

    const planFull = addToPlan.length >= 5;
       

    const handleAddToTodaysPlan = () => {
        // Check if the workout is already added to the plan
        if (alreadyAdded) {
            return toast.error(`" ${workout.name} " plan is already added to today's plan!`);
           
        }

        // after 5 plans added, show error toast
        if(planFull) {
            return toast.warning(`You can only add 5 plans to today's plan!`);
        }

        // new plan added to today's plan
        setAddToPlan([...addToPlan, workout]);
        toast.success(`" ${workout.name} " workout added to today's plan .`);
    };

    return (
        <button 

            onClick={handleAddToTodaysPlan}
            disabled={planFull}

            className={`btn border-0 rounded-xl

                ${planFull
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-[#B8FF00] text-black hover:bg-[#a8eb00]"
                }
                
            `}>
                     

            <FaRegCalendarPlus size={16} />

              {planFull
                ? "Adding to plan is full"
                : "Add to today's plan"
                }

        </button>
    );
};

export default AddToPlanBtn;