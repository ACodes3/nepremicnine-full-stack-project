import AgentsCard from "../Components/AgentsCard/AgentsCard";
import "../Components/ContentMain/ContentMain.css";
import React from "react";

const ContentMain = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
      </div>
    </>
  );
};

export default ContentMain;
