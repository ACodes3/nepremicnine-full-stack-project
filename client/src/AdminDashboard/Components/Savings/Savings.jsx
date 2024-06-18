import { useEffect, useState } from "react";
import axios from "axios";
import { savings } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";
import { formatDate } from "../Functions/FormatDate";

const Savings = () => {
  const [posts, setPosts] = useState([]);
  const [role, setRole] = useState(""); // State to store user role

  useEffect(() => {
    // Fetch estates data
    axios
      .get("http://localhost:3000/auth/posts")
      .then((result) => {
        if (result.data.Status) {
          const reversedEstates = result.data.Result.reverse();
          setPosts(reversedEstates);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">New Listings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {posts.map((post) => (
            <div className="grid-item" key={post.id}>
              <div className="grid-item-top-r">
                <p className="text-silver-v1">{post.post_title}</p>
              </div>
              <div className="grid-item-top-l">
                <span className="text text-silver-v1">
                  {formatDate(post.post_created_at)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
