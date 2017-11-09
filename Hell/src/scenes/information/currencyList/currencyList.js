import styles from './currencyList.css';
import React from "react";
import ReactDOM from "react-dom";
import Currency from '../../../components/currency/currency.js';
import moment from "moment";
import req from '../../../services/req.js';
import compareArr from '../../../services/compareArr.js';


let url = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0&onDate=";
let urlCurToday = url + moment().format("YYYY-MM-DD");
let urlCurYesterday = url + moment().subtract(1, 'days').format("YYYY-MM-DD");

class CurrencyList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        currsRate : [],
      };
    };

    componentDidMount() {
      let currsToday = req(urlCurToday );
      let currsYesterday = req(urlCurYesterday );
      Promise.all([currsToday , currsYesterday])
      .then(Data => { 
        let sheep = compareArr(Data[0],Data[1])
        Data[0].forEach((el,i)=>{
          el.Cur_Change = sheep[i]
        })
        this.setState({ currsRate:Data[0]}) 
      })  
      .catch(err => {console.log(err)}); 
    }

    render() {
     const currs = this.state.currsRate;
      return (
        <div className="currency-list">
          {currs          
            .map((item, index) => {
              return (
                <Currency
                  curAbbr = {item.Cur_Abbreviation}
                  cur_rate = {item.Cur_OfficialRate}
                  curChange={item.Cur_Change}
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
