import AgentsCard from "../../AdminDashboard/Components/AgentsCard/AgentsCard";
import "./agentsPage.scss";

function AgentsPage(){
    return(
        <div className="agentsPage" style={{ display: "flex", flexWrap: "wrap" }}>
            <AgentsCard />
            <AgentsCard />
            <AgentsCard />
            <AgentsCard />
            <AgentsCard />
        </div>
    )
}

export default AgentsPage;