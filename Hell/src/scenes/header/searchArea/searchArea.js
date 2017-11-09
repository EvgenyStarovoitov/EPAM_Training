import React from "react";
import ReactDOM from "react-dom";
import Search from '../../../components/search/search.js';
import styles from './searchArea.css';

class SearchArea extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        textValue: this.props.textValue,
      };
    }
  
    render() {
      return (
        <div className="search-area">
            <Search textValue = {this.state.textValue}/>
        </div>
      );
    }
};

export default SearchArea;
