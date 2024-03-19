import React from "react";
import InteractionComponent from "../components/InteractionComponent.jsx"; // Import the InteractionComponent

class Index extends React.Component {
  render() {
    return (      
      <section className="index">     
        <div className="textContainer">
          <div className="mainText">
            <h1>Vill du göra skillnad... och tjäna pengar? </h1>
          </div>
          <InteractionComponent message = "Message from props!"/>
        </div>
      </section>
    );
  }
}

export default Index;
