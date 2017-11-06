import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/button.js';
import Info from './scenes/information/info.js';
import styles from './index.css';
import Interaction from './scenes/interaction/interaction.js';


let all = () => {
    return (
        <div className="app">
            <Interaction />
            <Info />
        </div>
    )
}
console.log(document.querySelector('.container'));
ReactDOM.render(all(), document.querySelector('.container'));

// let today = moment().format("YYYY-MM-DD");
// let yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
// let url = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0&onDate=";
// console.log(url+today);
// console.log(url+yesterday);

// let a = [3.096,2.15,3,4,5,6];
// let b = [3.092,2.20,3,4,5,2];
// let compareFunc = (arr1, arr2) =>{
// 	return  arr1.map((el, i)=>{return el.Cur_OfficialRate-arr2[i].Cur_OfficialRate});
// };
// alert(compareFunc(a,b));

// let compareFunc = (arr1, arr2) =>{
// 	return arr1.map((el, i)=>{
//   let roundNum = el.Cur_OfficialRate-arr2[i].Cur_OfficialRate;
//   return Math.round(roundNum*10000)/10000;
//  })}

// var p1 = Promise.resolve([1,3,4,1,2,5,1,32,112]);
// var p2 = Promise.resolve([1,2,5,6,2,7,9,2,123]);
// Promise.all([p1, p2]).then(values => {  
//     return values[0].map((el, i)=>{
//        console.log( el-values[1][i])
//     })
// });

