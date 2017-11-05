import React from "react";
import ReactDOM from "react-dom";
import styles from './submit.css';

class Submit extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textValue: this.props.textValue };
      }
    
    render(){
        console.log('submit Info');
        return (
            <div className="info">
                <input type="sumbit" value={this.state.textValue}/>
            </div>
        );
    }
} 

export default Submit;