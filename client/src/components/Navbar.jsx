import { useState, useEffect } from "react";
import "./styles/navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
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
        document.cookie = "token=; Max-Age=0"; // Remove token
        setUser(null);
        navigate("/");
      }
    });
  };

  //const user = false;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>ACvetkoska Estate</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/offices">Offices</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={`http://localhost:3000/Images/${user.avatar}`} alt="avatar-image" />
            <span>{user.name}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/user-login">Sign in</Link>
            <Link to="/user-register" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu-icon" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/offices">Offices</Link>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
