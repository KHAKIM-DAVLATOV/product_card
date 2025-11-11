// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorCardButton = document.querySelector('#change-color-first-card');
const greenColorHash = '#0f750bff';

changeColorCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = greenColorHash;
});

// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-cards');
const blueColorHash = '#17249cff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => {
  card.style.backgroundColor = blueColorHash;
  })
});

// Открыть Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')
  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    return;
  }
}

// Вывод консоль лог

const outputAlertandLogBtn = document.querySelector('#output-console-log');

outputAlertandLogBtn.addEventListener('click', () => outputAlertandConsoleLog('ДЗ №4'));

function outputAlertandConsoleLog (message) {
  alert(message);
  console.log(message);
};


//вывод в консоль заголовка

const OutputTitle = document.querySelector(".main-title");

OutputTitle.addEventListener("mouseover", () => console.log(OutputTitle.textContent));


// Переключение цветов кнопки

const toggleColorButton = document.getElementById("btn-change-bg");

toggleColorButton.addEventListener("click", function () {
this.classList.toggle('bg-red');
this.classList.toggle('bg-blue');
});
