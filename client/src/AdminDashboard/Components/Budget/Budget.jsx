import { useEffect, useState } from "react";
import axios from "axios";
import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
    const [estates, setEstates] = useState([]);
    const [role, setRole] = useState(""); // State to store user role
    const [estateTotal, setEstateTotal] = useState(0); // Initialize estateTotal with a default value

    useEffect(() => {
        // Fetch estates data
        axios
            .get("http://localhost:3000/auth/estates")
            .then((result) => {
                if (result.data.Status) {
                    const reversedEstates = result.data.Result.reverse();
                    setEstates(reversedEstates);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    useEffect(() => {
        // Fetch and update estateTotal when estates state changes
        estateCount();
    }, []); // Watch for changes in estates state to update estateTotal

    const estateCount = () => {
        axios.get("http://localhost:3000/auth/estates-count").then((result) => {
            if (result.data.Status) {
                setEstateTotal(result.data.Result[0].estate_count);
            }
        });
    };

    return (
        <div className="grid-two-item grid-common grid-c4">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">New Estates</h3>
                <button className="grid-c-title-icon">
                    <img src={ iconsImgs.plus } alt="Add" />
                </button>
            </div>
            <div className="grid-c-top text-silver-v1">
                <h2 className="lg-value">Total Estates</h2>
                <span className="lg-value"> {estateTotal} </span>
            </div>
            <div className="grid-c4-content bg-jet">
                <div className="grid-items">
                    {
                        estates.map((estate) => (
                            <div className="grid-item" key={estate.id}>
                                <div className="grid-item-l">
                                    <div className="icon">
                                        <img src={ iconsImgs.check } alt="Check" />
                                    </div>
                                    <p className="text text-silver-v1">{ estate.estate_type } <span>{ estate.estate_city }</span></p>
                                </div>
                                <div className="grid-item-r">
                                    <span className="text-silver-v1">$ { estate.estate_property }</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Budget;
