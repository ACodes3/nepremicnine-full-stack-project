import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import "./singlepage.scss";

import { singlePostData, userData } from "../../lib/dummydata";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SinglePage() {
  const { id } = useParams();
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:3000/auth/combined-estates-agent/" + id)
      .then((response) => response.json())
      .then((data) => {
        if (data.Status) {
          // Set the fetched data to state
          setEstateData(data.Result);
        } else {
          console.error("Error fetching data:", data.Error);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{estateData.post_title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{estateData.estate_address}</span>
                </div>
                <div className="price">$ {estateData.estate_rent}</div>
              </div>
              <div className="user">
                <img src={`http://localhost:3000/Images/` + estateData.agent_avatar} alt="user-image" />
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {estateData.agent_name} {estateData.agent_surname}
                </span>
                <span>{estateData.agent_phone}</span>
              </div>
            </div>
            <div className="bottom">{estateData.post_detail_desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{estateData.post_detail_utilities}</p>
              </div>
            </div>
          </div>
          <div className="listVertical">
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>{estateData.post_detail_income}</p>
              </div>
            </div>
          </div>
          <div className="listVertical">
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{estateData.post_detail_pets}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{estateData.estate_quadrature} sqrf</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{estateData.estate_bedrooms} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{estateData.estate_bathrooms} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{estateData.post_detail_schools} km away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{estateData.post_detail_bus} km away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{estateData.post_detail_restaurant} km away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
