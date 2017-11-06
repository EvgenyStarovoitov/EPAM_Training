import React from "react";
import ReactDOM from "react-dom";
import styles from './info.css';
import Nav from './navigation/nav.js';
import CurInfo from './cyrrencyInfo/cyrrencyInfo.js';

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textValue: this.props.textValue 
        };
      }
    
    render(){
        console.log('render Info');
        return (
            <div className="info">
                <Nav />
                <CurInfo />
            </div>
        );
    };
}; 

export default Info;