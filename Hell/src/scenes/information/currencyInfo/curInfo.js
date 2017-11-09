import React from "react";
import ReactDOM from "react-dom";
import styles from './curInfo.css';
import CurInfoRow from '../../../components/cur-info__row/curInfo__row.js';

class CurInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            Rates : [{"Cur_ID":145,"Date":"2017-11-01T00:00:00","Cur_OfficialRate":1.9741},{"Cur_ID":145,"Date":"2017-11-02T00:00:00","Cur_OfficialRate":1.9760},{"Cur_ID":145,"Date":"2017-11-03T00:00:00","Cur_OfficialRate":1.9774},{"Cur_ID":145,"Date":"2017-11-04T00:00:00","Cur_OfficialRate":1.9806},{"Cur_ID":145,"Date":"2017-11-05T00:00:00","Cur_OfficialRate":1.9855},{"Cur_ID":145,"Date":"2017-11-06T00:00:00","Cur_OfficialRate":1.9855},{"Cur_ID":145,"Date":"2017-11-07T00:00:00","Cur_OfficialRate":1.9855},{"Cur_ID":145,"Date":"2017-11-08T00:00:00","Cur_OfficialRate":1.9855},{"Cur_ID":145,"Date":"2017-11-09T00:00:00","Cur_OfficialRate":1.9908},{"Cur_ID":145,"Date":"2017-11-10T00:00:00","Cur_OfficialRate":1.9915}]
        };
      }
      render(){
        let Rates = this.state.Rates;
        console.log('render CurInfo');
        return (
            <div className="cur-info">
                <CurInfoRow
                    date = {"Date"}
                    cur_rate = {"Currency"}                
                 />
                {Rates         
                    .map((item, index) => {
                        return (
                            <CurInfoRow
                            date = {item.Date}
                            cur_rate = {item.Cur_OfficialRate}
                            key = {index}                  
                            />
                        );
                    })
                }
            </div>
        );
      }
}

export default CurInfo;