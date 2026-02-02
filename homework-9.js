let user = undefined;

// 1. Создаем файл, все как прошлых дз.
// 2. Почитать про теги: <label>, <form>, <input>
// 3. Сверстать данный footer используя семантические теги (footer, nav и т.д.)

// 4. К Форме, которая прикреплена в футере - добавить логику 
// email должен соответствовать стандартам (добавить валидацию)
// если он не заполнен - форма не отправляется. Кнопка "Подписаться"
// и есть "отправкой формы", при нажатии на которую мы будем выводить
// консоль лог  в виде объекта: { email: 'введенная почта' }

const footerEmail = document.querySelector('#footer-email');
footerEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  getForm(form);
  console.log(getForm(form));
});

function getForm(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
}

// Уровень 2.0:
// 5. Создать форму для регистрации.
// 6. Сохраняем этот объект в переменную для дальнейшего использования.

const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const registrationForm = document.querySelector('.registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formValue = getForm(form);
  if (formValue.password !== formValue.repeatPassword) {
    registrationForm.innerHTML = 'Регистрация не пройдена!';
    return;
  }
  user = formValue;
  user.createdOn = new Date();
  console.log(user);
  form.reset();
});

// Уровень 3:
// 7. Создать кнопку "Аутентификация"
// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно
// путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
// Важные правила создания модалки:
// 1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
// 2) Модальное окно находиться ровно по центру страницы, независимо от масштаба

const authBtn = document.getElementById('authBtn');
const modal = document.getElementById('modal');
const authLogin = document.getElementById('auth-login');
const authPassword = document.getElementById('auth-password');
const closeBtn = document.querySelector('.close-btn');
const messageEl = document.getElementById('message');
const loginForm = document.getElementById('loginForm');

authBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = authPassword.value;
  const login = authLogin.value;

  if (password === user.password && login === user.login) {
    const currentUser = user;
    currentUser.loginDate = new Date()
    messageEl.textContent = 'Успешный вход!';
    messageEl.style.color = 'green';
    modal.classList.remove('modal-showed');
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Неверный логин или пароль';
  }
});

