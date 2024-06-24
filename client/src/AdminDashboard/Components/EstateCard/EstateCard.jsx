import React from "react";
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg";
import { listData } from "../../../lib/dummydata";
import OfficeMap from "../../OfficeDashboard/Map/OfficeMap";
import { useEffect, useState } from "react";
import axios from "axios";

const EstateCard = () => {
  const [estates, setEstate] = useState([]);

  useEffect(() => {
    // Fetch estates data
    axios
      .get("http://localhost:3000/auth/estates")
      .then((result) => {
        if (result.data.Status) {
          const reversedEstates = result.data.Result.reverse();
          setEstate(reversedEstates);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const data = listData;

  return (
    <>
      {estates.map((estate) => (
        <div className="upc" key={estate.estate_id}>
          <div className="gradient">
            <OfficeMap items={data} />
          </div>
          <div className="profile-down">
            <div className="profile-title">{estate.estate_type}</div>
            <div className="profile-description">
              {estate.estate_address}
              <div>
                <p>{estate.estate_city}</p>
                <p>{estate.estate_bedrooms} bedrooms</p>
                <p>{estate.estate_bathrooms} bathrooms</p>
                <p>$ {estate.estate_rent}</p>
                <p>{estate.estate_quadrature} sqrt</p>
              </div>
            </div>
            <div className="profile-button">
              <a href="#">Contact Agent</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EstateCard;
