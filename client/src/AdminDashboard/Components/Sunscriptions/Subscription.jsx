import { useEffect, useState } from "react";
import axios from "axios";
import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./Subscriptions.css";
import { formatDate } from "../Functions/FormatDate";

const Subscriptions = () => {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState(""); 

    useEffect(() => {
        // Fetch estates data
        axios
            .get("http://localhost:3000/auth/users")
            .then((result) => {
                if (result.data.Status) {
                    const reversedEstates = result.data.Result.reverse();
                    setUsers(reversedEstates);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []); 

  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">New Users</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    users.map((user) => (
                        <div className="grid-item" key = {user.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.alert } />
                                </div>
                                <p className="text text-silver-v1">{ user.user_name_surname } <span>  { formatDate(user.user_created_at) }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ { user.user_max_rent }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Subscriptions