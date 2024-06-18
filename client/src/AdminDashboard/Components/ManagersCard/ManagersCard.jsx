import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg"

const ManagersCard = () => {
  const [managers, setManagers] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch estates data
    axios
      .get("http://localhost:3000/auth/managers")
      .then((result) => {
        if (result.data.Status) {
          const reversedEstates = result.data.Result.reverse();
          setManagers(reversedEstates);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {managers.map((manager) => (
        <div className="upc" key={manager.id}>
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src={manager.manager_avatar} alt="" />
            <div className="profile-title">
              {manager.manager_name} {manager.manager_surname}
            </div>
            <div className="profile-description">
              <span>{manager.manager_address}</span>
                <div>fax:{" "} {manager.manager_fax}</div>
                <div>phone:{" "} {manager.manager_phone}</div>
            </div>
            <div className="profile-button">
              <a href="#">Contact Manager</a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ManagersCard