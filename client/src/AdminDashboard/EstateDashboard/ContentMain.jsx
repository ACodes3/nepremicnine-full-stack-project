import "../Components/ContentMain/ContentMain.css";
import React from "react";
import EstateCard from "../Components/EstateCard/EstateCard";

const ContentMain = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <EstateCard/>
    </div>
  );
};

export default ContentMain;
