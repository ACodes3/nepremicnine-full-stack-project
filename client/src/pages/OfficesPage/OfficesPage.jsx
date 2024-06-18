import AgentsCard from "../../AdminDashboard/Components/AgentsCard/AgentsCard";
import OfficesCard from "../../AdminDashboard/Components/OfficeCard/OfficesCard";
import "./agentsPage.scss";

function OfficesPage(){
    return(
        <div className="agentsPage" style={{ display: "flex", flexWrap: "wrap" }}>
            <OfficesCard />
        </div>
    )
}

export default OfficesPage;