import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Transactions.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import { formatDate } from "../Functions/FormatDate";

const Transactions = () => {
  const [managers, setManagers] = useState([]);
  const [role, setRole] = useState(""); // State to store user role
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/managers")
      .then((result) => {
        if (result.data.Status) {
          setManagers(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Managers</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>

      <div className="grid-content">
        <div className="grid-items">
          {managers.map((manager) => (
            <div className="grid-item" key={manager.manager_id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img
                    src={
                      `http://localhost:3000/Images/` + manager.manager_avatar
                    }
                    alt=""
                  />
                </div>
                <p className="text">
                  {manager.manager_name} {manager.manager_surname}{" "}
                  <span>{formatDate(manager.manager_became_date)}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">$ {manager.manager_pay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
