import React from "react";
import ReactDOM from "react-dom";
import styles from './link.css';
// import { Link } from 'react-router'

class Link extends React.Component {
    constructor(props) {
      super(props);
    //   this.textValue = textValue;
      this.state = { 
        textValue: this.props.textValue,
      };
    }
  
    render() {
      return (
        <div>
            {/* <Link to='user' params={{userId: 10}} /> */}
            <a className = 'link link_m '>
            {this.state.textValue}
            </a>
        </div>
      );
    }
};

export default Link;
