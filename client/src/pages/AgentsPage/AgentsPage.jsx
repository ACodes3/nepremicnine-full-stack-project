import AgentsCard from "../../AdminDashboard/Components/AgentsCard/AgentsCard";
import "./agentsPage.scss";

function AgentsPage(){
    return(
        <div className="agentsPage" style={{ display: "flex", flexWrap: "wrap" }}>
            <AgentsCard />
        </div>
    )
}

export default AgentsPage;