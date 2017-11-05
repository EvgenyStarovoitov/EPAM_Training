import React from "react";
import ReactDOM from "react-dom";
import styles from './button.css';


class Button extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className = "button button_m">
           Create
        </div>
      );
    }
};
export default Button;
