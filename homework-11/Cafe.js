export class Cafe {
  
  constructor(adress, name){
    this.adress = adress;
    this.name = name;
  }
  
  getCafeInfo() {
    return `Адрес кафе - ${ this.adress }, название кафе - ${ this.name }`;
  }
  
  orderDrink(drink) {
    return drink.serveDrink();
  }
  
  getDrinkInfo(drink) {
    return drink.getInfo();
  }
}