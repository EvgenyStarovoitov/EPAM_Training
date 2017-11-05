import React from "react";
import ReactDOM from "react-dom";
import styles from './interaction.css';
// import Nav from './navigation/nav.js';
import SearchArea from './searchArea/searchArea.js';
import CurrencyList from './currencyList/currencyList.js';


class Interaction extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textValue: this.props.textValue };
      }
    
    render(){
        console.log('render Info');
        return (
            <div className="interaction">
            {/* <Nav />
            <CurInfo /> */}
            <SearchArea textValue = {"Search"}/>
            <CurrencyList />
            </div>
        );
    }
} 

export default Interaction;