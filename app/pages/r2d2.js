const R2D2 = {
  E: 2.718281828459045,
  PI: 3.14159265359,
  pow(x, n) {
    if (x === undefined || n === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(x)) {
      console.error(`Значение ${x} не является числом`);
    } else if (isNaN(n)) {
      console.error(`Значение ${n} не является числом`);
    } else if (n === 1) {
      return x;
    } else {
      return x * this.pow(x, n - 1);
    }
  },
  max(a, b) {
    if (a === undefined || b === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(a)) {
      console.error(`Значение ${a} не является числом`);
    } else if (isNaN(b)) {
      console.error(`Значение ${b} не является числом`);
    } else if (a > b) {
      console.log(`${a} больше ${b}`);
    } else if (a < b) {
      console.log(`${b} больше ${a}`);
    }
  },
  min(a, b) {
    if (a === undefined || b === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(a)) {
      console.error(`Значение ${a} не является числом`);
    } else if (isNaN(b)) {
      console.error(`Значение ${b} не является числом`);
    } else if (a < b) {
      console.log(`${a} меньше ${b}`);
    } else if (a > b) {
      console.log(`${b} меньше ${a}`);
    }
  },
  add(a, b) {
    if (a === undefined || b === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(a)) {
      console.error(`Значение ${a} не является числом`);
    } else if (isNaN(b)) {
      console.error(`Значение ${b} не является числом`);
    } else {
      return +a + +b;
    }
  },
  diam(len) {
    if (len === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(len)) {
      console.error(`Значение ${len} не является числом`);
    } else {
      return len / this.PI;
    }
  },
  disk(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
      console.error('Недостаточно данных');
    } else if (isNaN(a)) {
      console.error(`Значение ${a} не является числом`);
    } else if (isNaN(b)) {
      console.error(`Значение ${b} не является числом`);
    } else if (isNaN(c)) {
      console.error(`Значение ${c} не является числом`);
    } else {
      return b * b - 4 * a * c;
    }
  },
};

R2D2.add(2, 3);

// Перебрать объект используя for...in
const user = {
  name: 'John',
  surname: 'Doe',
  phone: '+380971234567',
  email: 'john@example.com',
  id: '123efr24',
};

for (const key in user) {
  if ({}.hasOwnProperty.call(user, key)) {
    console.log(`Свойство ${key} имеет значение ${user[key]}`);
  }
}

console.log(`Всего разобрано ${Object.keys(user).length} свойств объекта user`);
