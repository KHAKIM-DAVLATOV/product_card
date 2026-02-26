export class Drink {
  #temperature;
  
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  
  getInfo() {
    return `Название напитка - ${ this.name }, размер напитка - ${ this.size }, цена напитка - ${ this.price }`;
  }
  
  getTemperature() {
    return this.#temperature;
  }
  
  setTemperature(temperature) {
    return this.#temperature = temperature;
  }
  
  #prepareDrink() {
    console.log(`Готовится - ${ this.name }`);
  }
  
  serveDrink() {
    this.#prepareDrink();
    
    setTimeout( () => {
      console.log(`Температура приготовления - ${ this.#temperature }°C`);
    }, 2000);
    
    setTimeout( () => {
      console.log(`Ваш напиток - ${ this.name } готов, объёмом - ${ this.size }. К оплате - ${this.price} рублей`);
    }, 4000);
    
  }
  
}