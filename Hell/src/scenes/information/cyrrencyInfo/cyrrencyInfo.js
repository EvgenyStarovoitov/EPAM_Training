import React from "react";
import ReactDOM from "react-dom";
import styles from './cyrrencyInfo.css';
import CurInfoRow from './cur-info__row/cur-info__row.js';


class CurInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            textValue: this.props.textValue };
      }

      render(){
        console.log('render CurInfo');
        return (
            <div className="cur-info">
                <CurInfoRow
                    date = {"Date"}
                    cur_rate = {"Currency"}                
                 />
                <CurInfoRow
                    date = {this.props.date}
                    cur_rate = {this.props.cur_rate}                
                 />
            </div>
        );
      }
}

export default CurInfo;