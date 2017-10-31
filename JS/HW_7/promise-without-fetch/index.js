var http = require('http'),
    req = require('./js/req');

http.createServer((req, res)=> {
}).listen(80, ()=>{
	console.log('Server running on port 80');
});

var urls = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0','http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'];

let link0 = req.createReq(urls[0]);
let link1 = req.createReq(urls[1]);
let link2 = req.createReq(urls[2]);
let link3 = req.createReq(urls[3]);
let link4 = req.createReq(urls[4]);

Promise.all([link0, link1, link2, link3, link4]).then(parseData => { 
  console.log(parseData); 
});
