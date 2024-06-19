import "../../Components/ContentMain/ContentMain.css";
import React from "react";
import InsertAgentCard from "./InsertAgentCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <InsertAgentCard />
    </div>
  );
};

export default ContentMain;
