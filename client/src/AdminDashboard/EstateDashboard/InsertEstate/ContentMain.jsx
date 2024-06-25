import "../../Components/ContentMain/ContentMain.css";
import React from "react";
import InsertEstateCard from "./InserEstateCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <InsertEstateCard />
    </div>
  );
};

export default ContentMain;
