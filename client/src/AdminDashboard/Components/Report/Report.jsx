import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";
import { formatDate } from "../Functions/FormatDate";

const Report = () => {
    const [admins, setAdmins] = useState([]);
    const [role, setRole] = useState(""); // State to store user role
    useEffect(() => {
      axios
        .get("http://localhost:3000/auth/admins")
        .then((result) => {
          if (result.data.Status) {
            setAdmins(result.data.Result);
          } else {
            alert(result.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }, []);
    
    return (
      <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
          <h3 className="grid-c-title-text">Admins</h3>
          <button className="grid-c-title-icon">
            <img src={iconsImgs.plus} />
          </button>
        </div>
  
        <div className="grid-content">
          <div className="grid-items">
            {admins.map((admin) => (
              <div className="grid-item" key={admin.admin_id}>
                <div className="grid-item-l">
                  <div className="avatar img-fit-cover">
                    <img src={`http://localhost:3000/Images/` + admin.admin_avatar} alt="" />
                  </div>
                  <p className="text">
                    {admin.admin_name} {admin.admin_surname} <span>{formatDate(admin.admin_startdate)}</span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className="text-scarlet">$ {admin.admin_pay}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Report