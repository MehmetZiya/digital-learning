import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png"
import NavLinks from "./NavLinks";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "../scss/navbar.scss";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navRef = useRef();
    const handleClick = () => {
      setShowDropdown(!showDropdown);
    };
    const handleLinkClick = () => {
      setShowDropdown(false);
    };
    const handleClickOutside = () => {
      setShowDropdown(false);
    };
    const OutsideClick = (callback, ref) => {
      const handleClickOutside = (e) => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
          callback();
          return;
        }
      };
  
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
  
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });
    };
    OutsideClick(handleClickOutside, navRef);
    
    return (
      <header
        className={`navbar ${showDropdown ? "dropstatus" : ""}`}
        ref={navRef}
      >
        {!showDropdown && <Link to="/" className="logo">
          <img src={logo} alt="digital-learning" />
        </Link>}
        <nav className="menu">
          <NavLinks handleLinkClick={handleLinkClick} />
        </nav>
  
        {!showDropdown && (
          <MenuOutlined
            onClick={handleClick}
            className={`baricon  {${showDropdown} && menubar}`}
          />
        )}
  
        {showDropdown && (
          <nav className="dropMenu">
            <CloseCircleOutlined
              onClick={handleClick}
              className="closeIcon"
            />
            <NavLinks handleLinkClick={handleLinkClick} />
          </nav>
        )}
      </header>
    );
  };
  
  export default Navbar;