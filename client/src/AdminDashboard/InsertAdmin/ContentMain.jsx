import "../Components/ContentMain/ContentMain.css";
import React from "react";
import InsertAdminCard from "./InserAdminCard";

const ContentMain = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <InsertAdminCard />
    </div>
  );
};

export default ContentMain;
