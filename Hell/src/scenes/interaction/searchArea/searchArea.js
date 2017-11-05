import React from "react";
import ReactDOM from "react-dom";
import styles from './searchArea.css';
// import Input from '../input/input.js';
// import Submit from '../submit/submit.js';
import Search from '../../../components/search/search.js';


class SearchArea extends React.Component {
    constructor(props) {
      super(props);
    //   this.textValue = textValue;
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
