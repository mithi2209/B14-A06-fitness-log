import EmptyPlanTab from "@/Components/my-plan-stats/EmptyPlanTab";
import PlanStats from "@/Components/my-plan-stats/PlanStats";
import PlanTabs from "@/Components/my-plan-stats/PlanTabs";
import SelectedPlansCard from "@/Components/my-plan-stats/SelectedPlansCard";


const MyPlanPage = () => {
    return (
        <div>
            <PlanStats></PlanStats>
            <PlanTabs></PlanTabs>
            <EmptyPlanTab></EmptyPlanTab>
            <SelectedPlansCard></SelectedPlansCard>


        </div>
    );
};

export default MyPlanPage;