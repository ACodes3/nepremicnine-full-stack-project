import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./list.scss";

function List() {
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch("http://localhost:3000/auth/combined-estates-agent")
            .then(response => response.json())
            .then(data => {
                if (data.Status) {
                    // Set the fetched data to state
                    setEstateData(data.Result);
                } else {
                    console.error("Error fetching data:", data.Error);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="list">
            {estateData.map(item => (
                <Card key={item.estate_id} item={item} />
            ))}
        </div>
    );
}

export default List;
