import Sidebar from "../layout/Sidebar/Sidebar";
import "../AdminDashboard.css";
import Content from "./Content";

function AgentsDashboard() {
  return (
    <div className="adminDashboard">
      <Sidebar />
      <Content />
    </div>
  );
}

export default AgentsDashboard;
