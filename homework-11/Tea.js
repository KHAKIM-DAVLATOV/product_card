import { Drink } from "./Drink.js";

export class Tea extends Drink {
  
  constructor(name, size, price, temperature, sort, type) {
    super(name, size, price, temperature);
    this.sort = sort;
    this.type = type;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Сорт чая - ${ this.sort }. Вид чая - ${ this.type }`);
  }
  
  #prepareTea() {
    setTimeout(() => {
      console.log(`Высыпаем ${ this.name }. Сорта - ${ this.sort }`)
    }, 1000);
    
    setTimeout(() => {
      console.log(`Наливаем кипяток`)
    }, 2000);
  
    setTimeout(() => {
      console.log(`Даём настояться`)
    }, 3000);
  }
  
  serveDrink() {
    this.#prepareTea();
    super.serveDrink();
  }
  
}
