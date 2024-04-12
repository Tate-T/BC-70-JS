const axios = require("axios/dist/browser/axios.cjs");
const TOCKEN = "66191ded9a41b1b3dfbeea47";
const fetchData = () => {
    return fetch(
      `https://${TOCKEN}.mockapi.io/products/products`
    ).then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
}
fetchData().then(data=>console.log(data)).catch(err=>err)