var http = require('http');

exports.createReq = (url, cb)=> {  
    http.get( url, (res) => {
        let body = '';
        res.on('data', (d) => {
            body += d;
        });
        res.on('end', () =>{
          let parsed = JSON.parse(body);
          console.log(parsed);
          console.log('////////////')
        //   return parsed;
          cb();
        });
        res.on("error", (err) => {
            console.log("Error: " + err.message)
            return ;
        });
    });
    // cb();
};