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
        };
      }
    
    render(){
        console.log('render Info');
        return (
            <div className="info">
                <CurrencyList />
                <CurInfo />
                <Converter />
                {/* <ConvertBtn />
                <ConvertForm /> */}
            </div>
        );
    };
}; 

export default Info;