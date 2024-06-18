import React from "react";
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg";
import { listData } from "../../../lib/dummydata";
import OfficeMap from "../../OfficeDashboard/Map/OfficeMap";
import { useEffect, useState } from "react";
import axios from "axios";

const OfficesCard = () => {
  const [offices, setOffices] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch estates data
    axios
      .get("http://localhost:3000/auth/branch-offices")
      .then((result) => {
        if (result.data.Status) {
          const reversedEstates = result.data.Result.reverse();
          setOffices(reversedEstates);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const data = listData;

  return (
    <>
      {offices.map((office) => (
        <div className="upc" key={office.id}>
          <div className="gradient">
            <OfficeMap items={data} />
          </div>
          <div className="profile-down">
            <div className="profile-title">{office.office_city}</div>
            <div className="profile-description">
              {office.office_street_name} {office.office_street_number} {office.office_post_code} {office.office_city}
              <div>
                phone: {office.office_phone}
              </div>
            </div>
            <div className="profile-button">
              <a href="#">Contact Office</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OfficesCard;
