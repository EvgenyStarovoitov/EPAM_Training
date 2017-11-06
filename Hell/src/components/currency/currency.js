import React from "react";
import ReactDOM from "react-dom";
import styles from './currency.css';

class Currency extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        curAbbr: this.props.curAbbr,
        curRate: this.props.curRate,
        curChange: this.props.curChange,
        cur_id: this.props.curId
      };
    }
  
    render() {
      return (
        <div className="currency" cur_id={this.props.curId}>
            <div className="currency__abbr">{this.state.curAbbr}</div>
            <div className="currency__rate">{this.state.curRate}</div>
            <div className="currency__change">{this.state.curChange}</div>
        </div>
      );
    }
};

export default Currency;
