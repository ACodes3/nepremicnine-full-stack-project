import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import { listData } from "../../lib/dummydata";
import "./listpage.scss";
import Map from "../../components/Map/Map";

function ListPage() {
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:3000/auth/combined-estates-agent")
      .then((response) => response.json())
      .then((data) => {
        if (data.Status) {
          // Set the fetched data to state
          setEstateData(data.Result);
        } else {
          console.error("Error fetching data:", data.Error);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {estateData.map((item) => (
            <Card key={item.estate_id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
