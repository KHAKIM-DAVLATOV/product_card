import { productCards } from "./product-card.js";

const productTemplate = document.getElementById('product-template');
const productList = document.querySelector('#product-list');


console.log(productTemplate);


function outputProductCard (productCards) {
productCards.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.product-category').textContent = product.category;
  productClone.querySelector('.product-name').textContent = product.name;
  productClone.querySelector('.product-description').textContent = product.description;
  productClone.querySelector('.product-compound').textContent = product.compound;
  productClone.querySelector('.product-price').textContent = product.price;
  productList.appendChild(productClone);
});
}


//4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getArray = productCards.reduce((acc, product) => {
  acc.push = ({
    [product.name]: product.category
  })
  return acc
},[])

console.log(getArray)

//task 5 *. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

const getCards = () => {
  const userInput = promt('Сколько карточек отобразить? От 1 до 5');
  const selectedCount = Number(userInput);
  if (selectedCount > 1 && selectedCount <= products.length) {
    outputProductCard(products.slice(0,selectedCount))
  } else {
    alert ('Введите число от 1 до 5')
  }
}
