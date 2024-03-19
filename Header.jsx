import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../images/busfro-logo.png";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  function getHeaderClass() {
    switch(pathname) {
      case "/Butiker":
        return "header-butiker";
      case "/Inlämning":
        return "header-inlämning";
      case "/Franchise":
        return "header-franchise";
      case "/Omoss":
        return "header-omoss";
      default:
        return "header-default";
    }
  }

  return (
    <header className={getHeaderClass()}>
      <nav>
        <ul>
          <li><NavLink className="nav-link" to="/Butiker" >Butiker</NavLink></li>
          <li><NavLink className="nav-link" to="/Inlämning">Inlämning</NavLink></li>
          <li><NavLink exact="true" to="/"><img src={Logo} alt="Logotyp" /></NavLink></li>
          <li><NavLink className="nav-link" to="/Franchise">Franchise</NavLink></li>
          <li><NavLink className="nav-link" to="/Omoss">Om oss</NavLink></li>
        </ul>
        <div className="sliderBox">
          <label className="switch">
            <input type="checkbox" id="colorblindModeToggle" /> 
            <span className="slider round"></span>
          </label> 
          <h3>Vision aid</h3>
        </div>
        <script src="/.js/toggleColorblind.js" defer={true}></script>
      </nav>
    </header>
  );
}

export default Header;
