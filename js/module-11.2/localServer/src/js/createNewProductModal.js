const backdrop = document.querySelector('.backdrop')

export const createAddModal = () => {
    const formEl = `<form class="product-form">
          <input type="text" name="product_name">
          <input type="number" name="product_price">
          <input type="number" name="product_count">
          <button type="submit">Додати продукт</button>
        </form>`;
    
    return formEl
    
}

