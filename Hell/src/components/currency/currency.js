import React from "react";
import ReactDOM from "react-dom";
import styles from './currency.css';

class Currency extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = { 
        curAbbr: this.props.curAbbr,
        curRate: this.props.curRate,
        curChange: this.props.curChange,
        cur_id: this.props.cur_id
      }
    }
    handleClick(e) {
    console.log(e.currentTarget.getAttribute("cur_id"))
    }
    someFunc(){
      console.log("its work")
    }
    render() {
      return (
        <div className="currency" onClick={this.handleClick} cur_id={this.props.cur_id}>
            <div className="currency__abbr">{this.state.curAbbr}</div>
            <div className="currency__rate">{this.state.curRate}</div>
            <div className="currency__change">{this.state.curChange}</div>
        </div>
      );
    }
};

export default Currency;
