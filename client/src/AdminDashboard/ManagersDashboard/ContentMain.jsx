import AgentsCard from "../Components/AgentsCard/AgentsCard";
import "../Components/ContentMain/ContentMain.css";
import React from "react";
import ManagersCard from "../Components/ManagersCard/ManagersCard";

const ContentMain = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ManagersCard />
      <ManagersCard />
      <ManagersCard />
      <ManagersCard />
      <ManagersCard />
      <ManagersCard />
    </div>
  );
};

export default ContentMain;
