import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./profilePage.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to decode JWT token manually
  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const payload = JSON.parse(jsonPayload);
      console.log("Decoded JWT payload:", payload);
      return payload;
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      const decoded = decodeJWT(token);
      if (decoded) {
        setUser({ name: decoded.email, avatar: decoded.avatar });
        console.log("User set:", decoded.email, decoded.avatar);
      } else {
        console.error("Failed to decode token.");
      }
    } else {
      console.log("No token found in cookies.");
    }
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        // Remove token cookie
        document.cookie = "token=; Max-Age=0; Path=/;";
        setUser(null); 
        navigate("/");
        location.reload(); 
      }
    });
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            {user && (
              <>
                <span>
                  Avatar:{" "}
                  <img
                    src={`http://localhost:3000/Images/${user.avatar}`}
                    alt="avatar-image"
                  />
                </span>
                <span>
                  Email: <b>{user.name}</b>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
