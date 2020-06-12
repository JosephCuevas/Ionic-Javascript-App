const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const btnsave = document.querySelector('#btn-save');
const btndel = document.querySelector('#btn-del');
const productList = document.querySelector('#product-list');

const createNewProduct = (name, price) => {
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    newProductItem.textContent = name + ': $'+ price;
    ionCard.appendChild(newProductItem);
    productList.appendChild(ionCard);
}

btnsave.addEventListener('click', () =>{
    const name = productName.value;
    const price = productPrice.value;
    createNewProduct(name, price);
})