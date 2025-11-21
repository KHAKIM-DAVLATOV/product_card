//3 задание -  функция, которая принимает 2 параметра: город и температуру
    
const showInformation = (city,temperature) => {
  console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`)
}

showInformation("Санкт-Петербурге","21")

// 4 задание

const SPEED_SOUND = 1193.26;

const checkSpeed = (speed) => {
  if (speed > SPEED_SOUND) {
    console.log("Сверхзвуковая скорость")
  } else if (speed === SPEED_SOUND) {
    console.log("Скорость звука")
  } else if (speed < SPEED_SOUND) {
    console.log("Дозвуковая скорость")
  }
}

checkSpeed(1193)

// 5 задание 
const productName = 'Кофе';
const productPrice = 150;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    console.log(`${productName} приобретен`)
  } else {
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс`)
  }
}

checkPurchase(100);

// 6 задание

function checkMany(many) {
  return console.log(`В кошельке ${many}$`)
}

checkMany(23);

// 7 задание 

const name = 'Vlad'
let age = 23;
let city = 'Moscow';