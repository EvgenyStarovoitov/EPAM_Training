import fetch from 'node-fetch';

const createReq = (url)=> {
    return fetch(url)
    .then((res) => {
        return res.json();
    })
    .catch((err)=> {
        console.log(err);
    })
};

export default createReq;
