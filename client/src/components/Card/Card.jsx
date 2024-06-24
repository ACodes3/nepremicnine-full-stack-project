import "./card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  const firstImage = item.images[0].estate_images_name;
  return (
    <div className="card">
      <Link to={`/${item.estate_id}`} className="imageContainer">
        <img
          src={`http://localhost:3000/Images/${firstImage}`}
          alt="card-image"
        />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.estate_id}`}>{item.post_title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="address-img" />
          <span>{item.estate_address}</span>
        </p>
        <p className="price">${item.estate_rent}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bed" />
              <span>{item.estate_bedrooms} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bathroom" />
              <span>{item.estate_bathrooms} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save-icon" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="save-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
