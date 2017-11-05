import React from "react";
import ReactDOM from "react-dom";
import styles from './currencyList.css';
import Currency from '../../../components/currency/currency.js'

class CurrencyList extends React.Component {
    constructor(props) {
      super(props);
    //   this.textValue = textValue;
      this.state = { 
        textValue: this.props.textValue,
      };
    }
  
    render() {
      return (
        <div className="currency-list">
            <Currency 
              curAbbr = {"EUR"}
              curRate = {"2.15"}
              curChange={"+0.001"}
            />
        </div>
      );
    }
};

export default CurrencyList;
