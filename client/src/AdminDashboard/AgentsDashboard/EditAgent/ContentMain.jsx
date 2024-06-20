import "../../Components/ContentMain/ContentMain.css";
import React from "react";
import EditAgentCard from "./EditAgentsCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <EditAgentCard />
    </div>
  );
};

export default ContentMain;
