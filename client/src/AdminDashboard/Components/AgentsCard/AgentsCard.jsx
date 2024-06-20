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

  const handleDeleteAgent = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete-agent/" + id)
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
      {staff.map((staf) => (
        <div className="upc" key={staf.id}>
          <div className="gradiant"></div>
          <div className="profile-down">
            <img
              src={`http://localhost:3000/Images/` + staf.staff_avatar}
              alt=""
            />
            <div className="profile-title">
              {staf.staff_name} {staf.staff_surname}
            </div>
            <div className="profile-description">
              <span>{staf.staff_address}</span>
              <div>email: {staf.staff_email}</div>
              <div>phone: {staf.staff_phone}</div>
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
                Contact Agent
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
                Edit Agent
              </button>
              <button
                onClick={() => handleDeleteAgent(staf.staff_id)}
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
                Delete Agent
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AgentsCard;
