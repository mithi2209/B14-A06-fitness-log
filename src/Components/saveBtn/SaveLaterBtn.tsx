
"use client";

import {toast} from "react-toastify";
import { FaRegBookmark } from "react-icons/fa";
import { workoutContext } from "@/context/WorkoutProvider";
import { IExerciseLibraryDataTypes } from "@/app/Types/fitnessData";
import { useContext } from "react";




interface IAddToPlanBtnProps {
    workout: IExerciseLibraryDataTypes;
};



const SaveLaterBtn = ({ workout }: IAddToPlanBtnProps) => {

    const { savePlan, setSavePlan } = useContext(workoutContext);

        const handleSaveForLaterPlan = () => {

            const alreadySaved = savePlan.find((item) => item.id === workout.id);

            if (alreadySaved) {
                return toast.error(`This '${workout.name}' is already saved for later!`);
            }
        
            setSavePlan([...savePlan, workout]);
            toast.info(`'${workout.name}' saved for later !`);

    };

    return (
        <button 
            className="btn btn-outline rounded-xl border-[#232834] text-gray-300 hover:border-[#B8FF00] hover:bg-transparent"

            onClick={ handleSaveForLaterPlan}>

                <FaRegBookmark size={16} />
                Save for later

        </button>
    );
};

export default SaveLaterBtn;