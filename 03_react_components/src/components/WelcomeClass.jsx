import { Component } from "react";
import PropTypes from "prop-types";

class WelcomeClass extends Component {
  render() {
    return <h1>Hello ,{this.props.name}</h1>;
  }
}

WelcomeClass.prototypes = {
  name: PropTypes.string,
};

export default WelcomeClass;
