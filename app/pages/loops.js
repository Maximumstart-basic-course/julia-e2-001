// (1)
let k = 10;

while (k > 0) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k -= 1;
}

// (2)
const isAdmin = true;

isAdmin === true ? alert('Привет, Admin!') : alert('Ты точно не Admin');

// (3)
const log = prompt('Введите логин', '');

if (log === 'Admin') {
  const pas = prompt('Введите пароль', '');
  if (pas === 'qwerty') {
    alert('Добро пожаловать, Admin');
  } else if (pas === null || pas === '') {
    alert('Отказано в доступе');
  } else {
    alert('Введенный пароль неправильный');
  }
} else if (log === 'User') {
  const pas = +prompt('Введите пароль', '');
  if (pas === 12345) {
    alert('Добро пожаловать, User');
  } else if (pas === 0) {
    alert('Отказано в доступе');
  } else {
    alert('Введенный пароль неправильный');
  }
} else {
  alert('Такого логина нет в системе');
}

// (4)
const age = +prompt('Сколько тебе лет?', '12');

switch (age) {
  case 12:
    alert('Слишком мало :(');
    break;
  case 16:
    alert('Почти достаточно :[');
    break;
  case 18:
    alert('Вот сейчас в самый раз! :)');
    break;
  default:
    alert('Возраст не определен %)');
}
