

"use client";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { workoutContext } from "@/context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";

interface IAddToPlanBtnProps {
    workout: IExerciseLibraryDataTypes;
    addToTodaysPlan: IExerciseLibraryDataTypes[];
    setAddToTodaysPlan: Dispatch<SetStateAction<IExerciseLibraryDataTypes[]>>;
};



const AddToPlanBtn = ({ workout }: IAddToPlanBtnProps) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(workoutContext) as IAddToPlanBtnProps;
       

    const handleAddToTodaysPlan = () => {
        
        setAddToTodaysPlan([...addToTodaysPlan, workout]);
    };

    return (
         <button 
                className="btn border-0 rounded-xl bg-[#B8FF00] text-black hover:bg-[#a8eb00]" 

                onClick={() => handleAddToTodaysPlan()}>

                <FaRegCalendarPlus size={16} />
                Add to today's plan

            </button>
    );
};

export default AddToPlanBtn;