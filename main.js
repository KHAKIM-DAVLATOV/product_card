// import '/homework-4.js';
// import '/homework-5.js';
// import '/homework-6.js';
// import '/homework-7.js';
// import '/homework-8.js';
import '/homework-9.js';

// 3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов.

class Country {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
  
  showCountryInfo() {
    console.log(`Название страны: ${this.name}, количество населения - ${this.population}`);
  }
}

class Russia extends Country {
  constructor(name, population, language) {
    super(name,population);
    this.language = language;
  }
  
  showCountryInfo() {
    console.log(`Название страны: ${this.name}, количество населения - ${this.population}, язык страны - ${this.language}`);
  }
}

const usa = new Country('USA', 5000);
usa.showCountryInfo();

const russia = new Russia('Russia', 10000, 'русский')
russia.showCountryInfo();
