
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

    const { addToPlan, setAddToPlan } = useContext(workoutContext);
       

    const handleAddToTodaysPlan = () => {

        const alreadyAdded = addToPlan.find((item) => item.id === workout.id);

        if (alreadyAdded) {
            return toast.error(`This '${workout.name}' is already added to today's plan!`);
           
        }
        setAddToPlan([...addToPlan, workout]);
        toast.success(`'${workout.name}' added to today's plan!`);
    };

    return (
         <button 
                className="btn border-0 rounded-xl bg-[#B8FF00] text-black hover:bg-[#a8eb00]" 

                onClick={handleAddToTodaysPlan}>

                <FaRegCalendarPlus size={16} />
                Add to today&apos;s plan

            </button>
    );
};

export default AddToPlanBtn;