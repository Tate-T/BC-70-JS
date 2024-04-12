import axios from 'axios';

const TOKEN = '66191ded9a41b1b3dfbeea47';
// const BASE_URL = `https://${TOKEN}.mockapi.io`;
axios.defaults.baseURL = `https://${TOKEN}.mockapi.io`;
// export const getProducts = () => {
//    return axios.get('https://66191ded9a41b1b3dfbeea47.mockapi.io/products/products')
// }
// getProducts().then(data => console.log(data))

export const getProducts = async () => {
  try {
    const axiosResponse = await axios.get(`/products/products`);
    const data = axiosResponse.data;
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
const data = await getProducts();
console.log(data);

export const getProductById = async productId => {
  try {
    const axiosRes = await axios.get(`/products/products/${productId}`);
    console.log(axiosRes.data);
    return axiosRes.data;
  } catch (err) {
    throw new Error(err);
  }
};
// const productById = await getProductById(2);
// console.log(productById);

export const createProduct = async newProduct => {
  try {
    const createProduct = await axios.post('/products/products', newProduct);
    return createProduct.data;
  } catch (err) {
    throw new Error(err);
  }
};
// const createNewProduct = await createProduct({
//   price: 100,
//   name: 'orange',
//   quantity: 15,
// });
// console.log(createNewProduct);

export const updateProductById = async (updatedProduct, productId) => {
  try {
    const updateProduct = await axios.put(
      `/products/products/${productId}`,
      updatedProduct
    );
    console.log(updateProduct.data);
    return updateProduct.data;
  } catch (err) {
    throw new Error(err);
  }
};
// const updateProduct = await updateProductById(
//   {
//     price: 0,
//     name: 'oranges',
//     quantity: 0,
//   },
//   29
// );
// console.log(updateProduct);

export const deleteProductById = async productId => {
  try {
    return axios.delete(`/products/products/${productId}`).data;
  } catch (err) {
    throw new Error(err);
  }
};
// await deleteProductById(29)
// await deleteProductById(32);
// console.log(await deleteProductById(33));
