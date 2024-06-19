import "../../Components/ContentMain/ContentMain.css";
import React from "react";
import InsertManagerCard from "./InsertManagerCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <InsertManagerCard/>
    </div>
  );
};

export default ContentMain;
