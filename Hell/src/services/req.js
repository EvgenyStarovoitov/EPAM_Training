var http = require('http');

// let createReq = (url)=> {
//     return (url) =>{
//     return fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .catch((err)=> {
//         console.log(err);
//     })
//     }
// };

// export default createReq;


let createReq = (url)=> {  
    return new Promise((resolve, reject)=> {
        http.get( url, (res) => {
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', ()=>{
                let parseData = JSON.parse(body);
                resolve(parseData);
            });
            res.on('error', (err)=>{
                reject(Error(err));
            });
        });
    });
};

export default createReq;