import React from "react";
import ReactDOM from "react-dom";
import styles from './curInfo__row.css';

class CurInfoRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        date: this.props.date,
        cur_rate: this.props.cur_rate,
        cur_id: this.props.curId
      };
    }
  
    render() {
      return (
        <div className="cur-info__row">
            <div className="cur-date">{this.state.date}</div>
            <div className="cur-rate">{this.state.cur_rate}</div>
        </div>
      );
    }
};

export default CurInfoRow;
