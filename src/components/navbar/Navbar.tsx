import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="log" />
          <span>PradhanEstate</span>
        </a>
        <Link to="/link">Link</Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Others</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src="/menu.png" alt="menu" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
