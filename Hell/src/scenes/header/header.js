import React from "react";
import ReactDOM from "react-dom";
import SearchArea from './searchArea/searchArea.js';
import Nav from './navigation/nav.js';
import styles from './header.css';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textValue: this.props.textValue };
    }
    
    render(){
        console.log('render Header');
        return (
            <div className="header">
                <SearchArea textValue = {"Search"}/>
                <Nav />
            </div>
        );
    }
} 

export default Header;