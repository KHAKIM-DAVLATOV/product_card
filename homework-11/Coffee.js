import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  
  constructor(name, size, price, temperature, milk, grain) {
    super (name, size, price, temperature);
    this.milk = milk;
    this.grain = grain;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Тип зёрен - ${ this.grain }. Молоко: ${ this.milk }`);
  }
  
  #prepareCoffee() {
    setTimeout(() => {
      console.log(`Перемалываем зёрна - ${ this.grain }`)
    }, 1000);
    
    setTimeout(() => {
      console.log(`Добавляем молоко - ${ this.milk }`)
    }, 2000);
  
    setTimeout(() => {
      console.log(`Подаём приготовленное - ${ this.name }`)
    }, 3000);
  }
  
  serveDrink() {
    this.#prepareCoffee();
    super.serveDrink();
  }
  
}

