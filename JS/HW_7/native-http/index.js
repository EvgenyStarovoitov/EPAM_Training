const http = require('http'),
      req = require('./js/getReq');

http.createServer((req, res) => {
}).listen(80, () => {
	console.log('Server running on port 80');
});

let urls = ['http://www.nbrb.by/API/ExRates/Rates/191', 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0','http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1', 'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'];

  req.createReq(urls[0], () => {
    req.createReq(urls[1], () => {
      req.createReq(urls[2], () => {
        req.createReq(urls[3], () => {
          req.createReq(urls[4], () => {
            console.log('finish');
          });  
        });
      });
    });
  });