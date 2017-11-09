import React from "react";
import ReactDOM from "react-dom";
import styles from './convert-btn.css';

class ConvertBtn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        textValue: this.props.textValue,
      };
    }
    handleClick(e) {
      var form = document.querySelector('.converter');
      form.className.toggle('show');
    }

    render() {
      return (
        <div className="convert-btn" onClick={this.handleClick}>
           Converter
        </div>
      );
    }
};

export default ConvertBtn;
