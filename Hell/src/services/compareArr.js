
let compareFunc = (arr1, arr2) =>{
	return arr1.map((el, i)=>{
  let roundNum = el.Cur_OfficialRate-arr2[i].Cur_OfficialRate;
  let somearr =  Math.round(roundNum*10000)/10000;
  return somearr;
 })}
// add to arr a change
 export default compareFunc;