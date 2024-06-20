import "../../Components/ContentMain/ContentMain.css";
import React from "react";
import EditManagersCard from "./EditManagersCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <EditManagersCard />
    </div>
  );
};

export default ContentMain;
