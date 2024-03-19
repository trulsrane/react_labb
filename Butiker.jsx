import React from "react";
import HalmstadImage from "../images/Halmstad.png";
import VäxjöImage from "../images/Växjö.png";
import MotalaImage from "../images/Motala.png";
import VästervikImage from "../images/Västervik.png";
import GävleImage from "../images/Gävle.png";
import LingköpingImage from "../images/Lingköping.png";
import HelsingborgImage from "../images/Helsingborg.png";
import JönköpingImage from "../images/Jönköping.png";
import NorrköpingImage from "../images/Norrköping.png";
import KalmarImage from "../images/Kalmar.png";
import OskarshamnImage from "../images/Oskarshamn.png";
import KristianstadImage from "../images/Kristianstad.png";
import LidköpingImage from "../images/Lidköping.png";
import MalmöImage from "../images/Malmö.png";

class Butiker extends React.Component {
  render() {
    return (      
      <section className="butiker">
        <h2>BUTIKER</h2>
        <div className="image-gallery">
          <ul className="sort">
            <li className="gallery-item-3" id="sortable"><img src={HalmstadImage} alt="Halmstad"/></li>
            <li className="gallery-item-3" id="sortable"><img src={VäxjöImage} alt="Växjö"/></li>
            <li className="gallery-item-3" id="sortable"><img src={MotalaImage} alt="Motala"/></li>
            <li className="gallery-item-3" id="sortable"><img src={VästervikImage} alt="Västervik"/></li>
            <li className="gallery-item-3" id="sortable"><img src={GävleImage} alt="Gävle"/></li>
            <li className="gallery-item-3" id="sortable"><img src={LingköpingImage} alt="Lingköping"/></li>
            <li className="gallery-item-3" id="sortable"><img src={HelsingborgImage} alt="Helsingborg"/></li>
            <li className="gallery-item-3" id="sortable"><img src={JönköpingImage} alt="Jönköping"/></li>
            <li className="gallery-item-3" id="sortable"><img src={NorrköpingImage} alt="Norrköping"/></li>
            <li className="gallery-item-3" id="sortable"><img src={KalmarImage} alt="Kalmar"/></li>
            <li className="gallery-item-3" id="sortable"><img src={OskarshamnImage} alt="Oskarshamn"/></li>
            <li className="gallery-item-3" id="sortable"><img src={KristianstadImage} alt="Kristianstad"/></li>
            <li className="gallery-item-3" id="sortable"><img src={LidköpingImage} alt="Lidköping"/></li>
            <li className="gallery-item-3" id="sortable"><img src={MalmöImage} alt="Malmö"/></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Butiker;
