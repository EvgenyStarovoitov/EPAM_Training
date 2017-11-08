import React from "react";
import ReactDOM from "react-dom";
import styles from './currencyList.css';
import Currency from '../../../components/currency/currency.js';
import moment from "moment";
import req from '../../../services/req.js';
import axios from 'axios';
// import request from 'request';

let today = moment().format("YYYY-MM-DD");
let yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
let url = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0&onDate=";
let CurrToday = url + today;
let CurrYesterday = url+yesterday;

class CurrencyList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        textValue: this.props.textValue,
        currs : []
      };
    };

    componentDidMount() {
        axios.get( CurrToday)
        .then(res => {
          const currs = res.data.map((el)=> el)
          this.setState({ currs})        
        })
        console.log(this.state.currs)
    }
  
    render() {
     const currs = this.state.currs;

      return (
        <div className="currency-list">
          {currs          
            .map((item, index) => {
              return (
                <Currency
                  curAbbr = {item.Cur_Abbreviation}
                  curRate = {item.Cur_OfficialRate}
                  curChange={item.Cur_Scale}
                  cur_id = {item.Cur_ID}
                  key = {index}                  
                />
              );
            })
          }
        </div>
      );
    }
};

export default CurrencyList;
