import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { iconsImgs } from "../../utils/images";
import "./Loans.css";
import { formatDate } from "../Functions/FormatDate";

const Loans = () => {
  const [offices, setOffices] = useState([]);
  const [role, setRole] = useState(""); // State to store user role
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/branch-offices")
      .then((result) => {
        if (result.data.Status) {
          setOffices(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Branch Offices</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>

      <div className="grid-content">
        <div className="grid-items">
          {offices.map((office) => (
            <div className="grid-item" key={office.id}>
              <div className="grid-item-l">
              <div className="avatar img-fit-cover">
                  <img src={iconsImgs.home} alt="" />
                </div>
                <p className="text">
                  {office.office_street_name} {office.office_street_number}{" "}
                  {office.office_post_code} {office.office_city}{" "}
                  <span>phone: {office.office_phone}</span>
                  <span>fax: {office.office_fax}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loans;
