import React from "react";
import ReactDOM from "react-dom";
import Link from '../../../components/link/link.js';
import styles from './nav.css';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           textValue: this.props.textValue 
        };
        this.inputsArray = [
            {
              textValue: 'About'
            },
            {
              textValue: 'Home'
            },
            {
              textValue: 'Pricing'
            },
            {
              textValue: 'Blog'
            }
        ]
      }

      render(){
        console.log('render Nav');
        return (
            <div className="nav">
                <div className="nav_header">
                  {this.inputsArray                   
                      .map((item, index) => {
                        return (
                          <Link
                          textValue={item.textValue}
                          key={index}
                          />
                        );
                  })}
                </div>
            </div>
        );
      }
}

export default Nav;