import "./AdminDashboard.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <Sidebar />
      <Content />
    </div>
  );
}

export default AdminDashboard;
