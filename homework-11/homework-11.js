import "/homework-11/Drink.js"
import "/homework-11/Coffee.js"
import "/homework-11/Tea.js"
import "/homework-11/Lemonade.js"
import "/homework-11/Cafe.js"
import { Drink } from "./Drink.js";
import { Tea } from "./Tea.js";
import { Lemonade } from "./Lemonade.js";
import { Coffee } from "./Coffee.js";
import { Cafe } from "./Cafe.js";

const capuchino = new Coffee("Капучино", "300 мл", 100, 40, "соевое", "арабика");
const bistro = new Cafe("Пражская д.13", "Бистро");
const apple = new Lemonade("Яблочный Лимонад", "250 мл", 270, 10, "Яблочный", "Персика");
bistro.orderDrink(apple);