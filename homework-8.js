import { productCards } from "./product-card.js";

const productTemplate = document.getElementById('product-template');
const productList = document.querySelector('#product-list');

function showProductCards (productCards) {
  productCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    
    const compoundList = productClone.querySelector(".product-compound");
    product.compound.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.classList.add("compound-item");
      compoundList.appendChild(li);
    });
    
    const priceElem = productClone.querySelector(".product-price");
    priceElem.textContent = `${product.price.toLocaleString()} ₽`;
    
    productList.appendChild(productClone);
  })
};


//4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productDescriptionsMap = productCards.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc
}, {}) 


console.log(productDescriptionsMap)


//task 5 *. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

const getCardCount = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const selectedCount = Number(input);
  if (selectedCount >= 1 && selectedCount <= productCards.length) {
    showProductCards(productCards.slice(0, selectedCount))
  } else {
    alert ('Введите число от 1 до 5')
  }
}

getCardCount();




