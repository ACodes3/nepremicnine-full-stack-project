import { useState } from "react";
import "./styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = false;
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
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="avatar-image"
            />
            <span>John Doe</span>
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
