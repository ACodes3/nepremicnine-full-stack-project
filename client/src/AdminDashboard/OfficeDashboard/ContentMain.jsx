import "../Components/ContentMain/ContentMain.css";
import React from "react";
import OfficesCard from "../Components/OfficeCard/OfficesCard";

const ContentMain = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        <OfficesCard/>
    </div>
  );
};

export default ContentMain;
