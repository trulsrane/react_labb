import React from "react";
import inlämning1 from "../images/inlämning1.png";
import inlämning2 from "../images/inlämning2.png";
import inlämning3 from "../images/inlämning3.png";
import inlämning4 from "../images/inlämning4.png";

function Inlämning() {
  return (      
    <section className="inlämning">
      <h2>INLÄMNING</h2>
      <div className="image-gallery">
        <ul className="gallery-list">
          <li className="gallery-item-4"><img src={inlämning1} alt="Bild 1"/></li>
          <li className="gallery-item-4"><img src={inlämning2} alt="Bild 2"/></li>
          <li className="gallery-item-4"><img src={inlämning3} alt="Bild 3"/></li>
          <li className="gallery-item-4"><img src={inlämning4} alt="Bild 4"/></li>
        </ul>
      </div>
    </section>
  );
}

export default Inlämning;
