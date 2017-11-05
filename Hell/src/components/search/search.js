import React from "react";
import ReactDOM from "react-dom";
import styles from './search.css';
// import Input from '../input/input.js';
// import Submit from '../submit/submit.js';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        textValue: this.props.textValue,
      };
    }
  
    render() {
      return (
        <div className="search-field">
            <input type="text" placeholder="search input"/>
            <input type="submit" value ={this.state.textValue}/>
        </div>
      );
    }
};

export default Search;
