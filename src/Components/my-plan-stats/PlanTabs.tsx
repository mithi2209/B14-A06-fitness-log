import SavedPlanTab from "./SavedPlanTab";
import TodaysPlanTab from "./TodaysPlanTab";


const PlanTabs = () => {
    return (
        <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16 ">

            <div  className="mt-6 flex flex-col gap-5 sm:flex-row items-center justify-between">

                {/* Plan Tab */}
                <div className="flex w-fit rounded-lg border border-[#232732] bg-[#151921] py-1 px-2 lg:px-3 font-inter text-[#8A92A0]">

                    <button className="btn btn-ghost  text-xs hover:bg-[#1F242D] py-1.5 px-3 text-gray-500 hover:border-[#2B303D]">
                    Today&apos;s Plan
                    </button>
                

                    <button className="btn btn-ghost py-1.5 px-3 text-xs hover:bg-[#1F242D]  text-gray-500 hover:border-[#2B303D]">
                    Saved
                    </button>

                </div>

                {/* sort by  */}

                <div className="flex justify-center items-center gap-3">
                    <span className="text-sm font-inter text-[#8A92A0]">Sort By</span>
                    <div>
                        <select className="select rounded-lg border border-[#252A33] bg-[#12151B] px-3 font-inter text-sm text-white outline-none w-30">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Name</option>
                        </select>
                    </div>
                </div>
            
            </div>

        </section>

     

    
    );
};

export default PlanTabs;