import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg";

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

  const handleDeleteManager = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete-manager/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <>
      {managers.map((manager) => (
        <div className="upc" key={manager.id}>
          <div className="gradiant"></div>
          <div className="profile-down">
            <img
              src={`http://localhost:3000/Images/` + manager.manager_avatar}
              alt=""
            />
            <div className="profile-title">
              {manager.manager_name} {manager.manager_surname}
            </div>
            <div className="profile-description">
              <span>{manager.manager_address}</span>
              <div>fax: {manager.manager_fax}</div>
              <div>phone: {manager.manager_phone}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "12px",
                  fontSize: "12px",
                  margin: "3px 3px",
                  cursor: "pointer",
                }}
              >
                Contact Manager
              </button>
              <button
                style={{
                  backgroundColor: "coral",
                  border: "none",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "12px",
                  fontSize: "12px",
                  margin: "3px 3px",
                  cursor: "pointer",
                }}
              >
                Edit Manager
              </button>
              <button
              onClick={() => handleDeleteManager(manager.manager_id)}
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "12px",
                  fontSize: "12px",
                  margin: "3px 3px",
                  cursor: "pointer",
                }}
              >
                Delete Manager
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ManagersCard;
