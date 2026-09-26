

const SavedPlanTab = () => {
    return (
       <div className="flex justify-center items-center gap-3">

                    <span className="text-sm font-inter text-[#8A92A0]">
                    Sort By
                    </span>

                   <div>
                        <select className="select rounded-lg border border-[#252A33] bg-[#12151B] px-3 font-inter text-sm text-white outline-none w-30">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Name</option>
                        </select>
                   </div>
                </div>
    );
};

export default SavedPlanTab;