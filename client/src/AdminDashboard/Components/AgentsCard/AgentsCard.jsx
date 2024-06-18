import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg";

const AgentsCard = () => {
  const [staff, setStaff] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch estates data
    axios
      .get("http://localhost:3000/auth/staff")
      .then((result) => {
        if (result.data.Status) {
          const reversedEstates = result.data.Result.reverse();
          setStaff(reversedEstates);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {staff.map((staf) => (
        <div className="upc" key={staf.id}>
          <div className="gradiant"></div>
          <div className="profile-down">
          <img src={`http://localhost:3000/Images/` + staf.staff_avatar} alt="" />
            <div className="profile-title">
              {staf.staff_name} {staf.staff_surname}
            </div>
            <div className="profile-description">
              <span>{staf.staff_address}</span>
                <div>email:{" "} {staf.staff_email}</div>
                <div>phone:{" "} {staf.staff_phone}</div>
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

export default AgentsCard;
