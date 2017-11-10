import React from "react";
import ReactDOM from "react-dom";
import styles from './info.css';

import CurInfo from './currencyInfo/curInfo.js';
import CurrencyList from './currencyList/currencyList.js';
import Converter from './converter/converter.js';

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rates : []
        };
        this.updateShared = this.updateShared.bind(this)
      }
    
    updateShared(sharedvalue){
        this.setState({rates: sharedvalue})
    }

    // componentWillUpdate(){console.log(this.state.rates)}

    render(){
        let Rates = this.state.rates;
        // console.log('render Info', Rates);
        return (
            <div className="info">
                <CurrencyList 
                passSomeDataFromCurList = {this.updateShared}
                />
                <CurInfo 
                rates = {Rates}
                />
                <Converter />
            </div>
        );
    };
}; 

export default Info;