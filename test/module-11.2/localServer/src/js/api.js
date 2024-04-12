const BASE_URL = 'http://localhost:3000/products';

export const getProducts = () => {
  return fetch(`${BASE_URL}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};
export const addProduct = (body) => {
    return fetch(`${BASE_URL}`, {
        method: "POST", 
        body: JSON.stringify(body)
    })
}


