const statusBlock = document.getElementById('status');
const userCards = document.querySelector('.user-cards');

loadUsers();

function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem('users'));
}

async function loadUsers() {
  try {
    
    userCards.textContent = 'Данные загружаются...';
    const users = getUsersFromStorage();
    
    if (users) {
      renderUsersCards(users);
      return;
    }
    
    const response = await fetch('./users.json');
    
    if (!response.ok) {
      localStorage.removeItem('users');
      throw new Error(`ошибка загрузки ${ response.status }`);
    }
    
    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data.users));
    
    setTimeout(() => renderUsersCards(data.users), 1000);
  } catch(error) {
    console.error(error);
    userCards.textContent = 'Ошибка загрузки данных';
  }
}
  
function renderUsersCards(usersArray) {
  userCards.textContent = '';
  const userTemplate = document.querySelector('#user-card-template');
  
  usersArray.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    
    userClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`;
    userClone.querySelector('.user-email').textContent = `Почта: ${ user.email }`;
    userClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`;
    userClone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`;
    userClone.querySelector('.user-city').textContent = `Город: ${ user.city }`;
    
    userClone.querySelector('.delete-btn').addEventListener('click', () => {
      deleteUser(user.id);
    })
    
    userCards.appendChild(userClone);
  });
}

function deleteUser(id) {
  let users = getUsersFromStorage();
  users = users.filter(user => user.id !== id);
  if (users.length === 0) {
    localStorage.removeItem('users');
  } else {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  renderUsersCards(users);
}

const getAllUsersButton = document.querySelector('.get-all-btn');
getAllUsersButton.addEventListener('click', () => loadUsers());

const deleteAllUsersButton = document.querySelector('.delete-all-btn');
deleteAllUsersButton.addEventListener('click', () => {
  localStorage.clear();
  userCards.textContent = 'Вы удалили все карточки';
  }
);


