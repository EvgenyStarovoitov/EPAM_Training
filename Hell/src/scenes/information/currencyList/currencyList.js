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
        rates : []
      };
      this.handleCur = this.handleCur.bind(this);
      this.someFunc = this.someFunc.bind(this);
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

    someFunc(){
      let pipi = this.state.rates;
      this.props.passSomeDataFromCurList(pipi)
    }
    
    handleCur(CurValue){
      this.setState({rates: CurValue});
      // console.log(this.state.rates)
      let pipi = this.state.rates;
      this.props.passSomeDataFromCurList(CurValue)
    }

    render() {
      const currs = this.state.currsRate;
      return (
        <div className="currency-list" onChange={this.someFunc}>
          {currs          
            .map((item, index) => {
              return (
                <Currency 
                  curAbbr = {item.Cur_Abbreviation}
                  cur_rate = {item.Cur_OfficialRate}
                  curChange={item.Cur_Change}
                  cur_id = {item.Cur_ID}
                  key = {index} 
                  onSelectCur =  {this.handleCur}          
                />
              );
            })
          }
        </div>
      );
    }
};

export default CurrencyList;
