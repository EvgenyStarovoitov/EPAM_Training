import React from "react";
import ReactDOM from "react-dom";
import styles from './converter.css';
import ConvertBtn from './convert-btn/convert-btn.js';
import ConvertForm from './convert-form/convert-form.js';

class Converter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {             
        };
      }
      render(){
        console.log('render Converter');
        return (
            <div className="converter">             
               <ConvertBtn />
               <ConvertForm />
            </div>
        );
      }
}

export default Converter;