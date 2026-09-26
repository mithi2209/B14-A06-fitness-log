

const MyPlanPageLoading  = () => {
    return (
       <div className="min-h-[70vh] flex flex-col items-center justify-center">
            <div className="loading loading-spinner loading-lg text-[#B8FF00]"></div>

            <p className="mt-5 text-lg font-inter text-gray-300">
            Loading workouts…
            </p>
        </div>
    );
};

export default MyPlanPageLoading;