import Sidebar from "../../layout/Sidebar/Sidebar";
import "../../AdminDashboard.css";
import Content from "./Content";

function EditAgent() {
  return (
    <div className="adminDashboard">
      <Sidebar />
      <Content />
    </div>
  );
}

export default EditAgent;
