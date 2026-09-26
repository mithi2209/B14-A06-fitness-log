import SavedPlanTab from "./SavedPlanTab";
import TodaysPlanTab from "./TodaysPlanTab";


const PlanTabs = () => {
    return (
        <section className="mx-4 md:mx-6 lg:mx-9  my-10 md:my-14 lg:my-16 ">

            <div  className="mt-6 flex flex-col gap-5 sm:flex-row items-center justify-between">
                {/* Todays PlanTabs */}
               <TodaysPlanTab></TodaysPlanTab>

                {/* Sort */}
                <SavedPlanTab></SavedPlanTab>
            </div>

        </section>

     

    
    );
};

export default PlanTabs;