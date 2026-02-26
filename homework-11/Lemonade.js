import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  
  constructor(name, size, price, temperature, syrup, fruit ) {
    super(name, size, price, temperature);
    this.syrup = syrup;
    this.fruit = fruit;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Сироп со вкусом- ${ this.syrup }. Кусочки фрукта: ${ this.fruit }`);
  }
  
  #prepareLemonade() {
    setTimeout(() => {
      console.log(`Добавляем сироп - ${ this.syrup }. Кусочки - ${ this.fruit }`)
    }, 1000);
    
    setTimeout(() => {
      console.log(`Наливаем содовую`)
    }, 3000);
  
    setTimeout(() => {
      console.log(`Хорошенька перемешиваем ${this.syrup} и фрукты в содовой`)
    }, 5000);
    
    setTimeout(() => {
      console.log(`Добавляем лёд и украшаем мятой`)
    }, 7000);
  }
  
  serveDrink() {
    this.#prepareLemonade();
    super.serveDrink();
  }
  
}