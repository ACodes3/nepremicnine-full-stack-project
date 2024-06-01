import { useState } from "react";
import "./styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
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
      </div>
      <div className="right">
        <Link to="/sing-in">Sign in</Link>
        <Link to="/sign-up" className="register">
          Sign up
        </Link>
        <div className="menuIcon">
          <img src="/menu.png" alt="menu-icon" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
