import React from "react";
import ReactDOM from "react-dom";
import styles from './cyrrencyInfo.css';


class CurInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textValue: this.props.textValue };
      }

      render(){
        console.log('render CurInfo');
        return (
            <div className="cur-info">
                Choice Currencies
                {}
            </div>
        );
      }
}

export default CurInfo;