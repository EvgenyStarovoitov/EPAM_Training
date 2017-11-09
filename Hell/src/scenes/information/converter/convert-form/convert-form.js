import React from "react";
import ReactDOM from "react-dom";
import styles from './convert-form.css';

class ConvertForm extends React.Component {
    constructor(props) {
      super(props);
        // textValue: this.props.textValue,
      this.state = { 
        textValue: this.props.textValue,
      };
    }
  
    render() {
      return (
        <div className="convert-form">
           <div className="converter__label"></div>
           <div className="converter__row">
                <div className="label"></div>
                <input type="number" className="input-usd"/>
                <select className="select-used"></select>
           </div>
           <div className="converter__row">

           </div>
        </div>
      );
    }
};

export default ConvertForm;
