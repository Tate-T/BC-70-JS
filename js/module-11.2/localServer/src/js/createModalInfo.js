export const createModalInfo = product => {
  console.log(product);
  return `
        <button class="close-modal">X</button>
        <img src="${product.photo}" alt="${product.productName}">
        <h2>${product.productName}</h2>
        <p>${product.description}</p>
    `;
};
