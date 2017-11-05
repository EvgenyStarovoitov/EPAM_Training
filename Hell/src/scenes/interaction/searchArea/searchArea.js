import React from "react";
import ReactDOM from "react-dom";
import styles from './search.css';
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
        <div className="search-field">
            {/* <Input />
            <Submit /> */}
            <Search textValue = {this.state.textValue}/>
            {/* <input type="text" placeholder="search input" value ={this.state.textValue}/>
            <input type="submit"/> */}
        </div>
      );
    }
};

export default SearchArea;
