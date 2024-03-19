import React from "react";

class InteractionComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    // Update state when button is clicked
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Press</button>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default InteractionComponent;
