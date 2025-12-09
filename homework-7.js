import { commentSocialNetwork } from "./comments.js";


// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber = number.filter(number => number >= 5);
console.log(newNumber);



// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const products = ['яблоко', 'черника', 'йогурт', 'кефир', 'молоко', 'масло', 'хлеб'];


console.log(products.includes('молоко'));
console.log(products.includes('батончик'));



// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const getReverseArray = (array) => { 
  return array.reverse()
};

console.log(getReverseArray(number))
console.log(getReverseArray(newNumber))
console.log(getReverseArray(products))



// 5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива (https://jsonplaceholder.typicode.com/comments). Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

console.log(commentSocialNetwork)

console.log(commentSocialNetwork.filter(comment => comment.email.includes('.com')))




//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const newArray = commentSocialNetwork.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1}
})

console.log(newArray)



//9. Перебрать массив, что бы объекты состояли только из айди и имени

const copyArray = commentSocialNetwork.map(comment => ({id: comment.id, name: comment.name}))

console.log(copyArray)



//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const checkLengthComment = commentSocialNetwork.map(comment => {
  return {...comment, isInvalid: comment.body.length > 180 ? true : false}
})

console.log(checkLengthComment)

//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map


const getArrayEmail = commentSocialNetwork.reduce((acc, comment) => {
  acc.push(comment.email)
  return acc
}, [])

console.log(getArrayEmail)

const getArrayEmailMap = commentSocialNetwork.map(comment => comment.email);

console.log(getArrayEmailMap)

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const arrayToString = getArrayEmail.toString()

console.log(arrayToString)

const arrayToString2 = getArrayEmail.join(' / ')

console.log(arrayToString2)