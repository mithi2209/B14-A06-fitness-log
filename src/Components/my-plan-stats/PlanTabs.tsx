import { PlanTab, SortOption } from '../../app/Types/fitnessData';


interface PlanTabsProps {

  activeTab: PlanTab;

  setActiveTab: Dispatch<
    React.SetStateAction<PlanTab>
  >;

  sortBy: SortOption;

   setSortBy:Dispatch<
    React.SetStateAction<SortOption>
  >;
}


const PlanTabs = ({
    activeTab,
    setActiveTab,
    sortBy,
    setSortBy

        }:PlanTabsProps ) => {
    return (
        <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16 ">

            <div  className="mt-6 flex flex-col gap-5 sm:flex-row items-center justify-between">

                {/* Plan Tab */}
                <div className="flex w-fit rounded-lg border border-[#232732] bg-[#151921] py-1 px-2 lg:px-3 font-inter text-[#8A92A0]">

                    <button
                          onClick={() =>setActiveTab("today")}

                          className={`btn btn-ghost  text-xs   py-1.5 px-3 text-gray-500 
                            ${
                                activeTab === "today"

                                ? "hover:bg-[#1F242D] border-[#2B303D] text-white"

                                :"text-gray-500"

                            }
                          `}
                        >
                    Today&apos;s Plan

                    </button>
                

                    <button 
                           onClick={() =>setActiveTab("saved") }
                            className={`btn btn-ghost py-1.5 px-3 text-xs   text-gray-500 

                                ${

                                    activeTab === "saved"

                                    ? "hover:bg-[#1F242D] border-[#2B303D] text-white"
                                    : "text-gray-500"
                                }

                             `}
                            
                       >
                        Saved
                    </button>

                </div>

                {/* sort by  */}

                <div className="flex justify-center items-center gap-3">
                    <span className="text-sm font-inter text-[#8A92A0]">Sort By</span>
                    <div>
                        <select className="select rounded-lg border border-[#252A33] bg-[#12151B] px-3 font-inter text-sm text-white outline-none w-30 ">

                            <option
                                 onClick={() => setSortBy("duration")}
                                    className={` ${
                                    sortBy === "duration"
                                        ? " text-white mb-1"
                                        : "bg-[#12151B] text-gray-400"
                                    }`}
                                
                                >Duration
                            </option>
                            <option
                                 onClick={() => setSortBy("caloriesBurned")}
                                    className={` ${
                                    sortBy === "duration"
                                        ? " text-white mb-1"
                                        : "bg-[#12151B] text-gray-400"
                                    }`}
                                
                                >Calories
                            </option>
                            <option
                                 onClick={() => setSortBy("rating")}
                                    className={` ${
                                    sortBy === "duration"
                                        ? " text-white"
                                        : "bg-[#12151B] text-gray-400"
                                    }`}
                                
                                >Rating
                            </option>

                           
                            
                        </select>
                    </div>
                </div>
            
            </div>

        </section>

     

    
    );
};

export default PlanTabs;