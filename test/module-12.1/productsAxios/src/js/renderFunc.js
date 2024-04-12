export const initialRender = () => {
  document.body.innerHTML = `<div class=""control-wrapper>
  <div>  
  <button class="get-btn" type="button">Get Element</button>
    <lable>ID:<input class="get-input" type="number"></lable>
    </div>
<div>
    <button class="get-all-btn" type="button">Get All Elements</button>
</div>
<div>
    <button class="delete-btn" type="button">Delete Element</button>
    <lable>ID:<input class="delete-input" type="number"></lable>
    </div>
<div>
    <button class="create-btn" type="button">Create Element</button>
    <lable>Price:<input class="create-price-input" type="text"></lable>
    <lable>Name:<input class="create-type-input" type="text"></lable>
    <lable>Quantity:<input class="create-quantity-input" type="text"></lable>
</div>
    <button class="update-btn" type="button">Update Element</button>
    <lable>ID:<input class="update-id-input" type="number"></lable>
    <lable>Price:<input class="update-price-input" type="text"></lable>
    <lable>Name:<input class="update-type-input" type="text"></lable>
    <lable>Quantity:<input class="update-quantity-input" type="text"></lable>

    </div>
<ul class="elements-list">
</ul>
    `;
};

export const renderElement = ({ price, name, quantity, id }) => {
  return `<li>
    <p>price: ${price}</p>
    <p>name: ${name}</p>
    <p>quantity: ${quantity}</p>
    <p>id: ${id}</p>
    </li>`;
};

export const renderElements = data => {
  return data.map(prod => renderElement(prod)).join('');
};
