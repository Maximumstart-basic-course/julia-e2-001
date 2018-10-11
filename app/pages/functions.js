// (1)
function add(a, b) {
  if (isNaN(a)) {
    console.error(`Значение ${a} не является числом`);
  } else if (isNaN(b)) {
    console.error(`Значение ${b} не является числом`);
  } else if (a === undefined || b === undefined) {
    console.error('Не достаточно данных');
  } else {
    return +a + +b;
  }
}

add(20, 50);

// (2)
function length(r) {
  if (isNaN(r)) {
    console.error(`Значение ${r} не является числом`);
  } else if (r === undefined) {
    console.error('Число не передано');
  } else {
    return `l = ${2 * Math.PI * +r}`;
  }
}

length(10);

// (3)
function discr(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    console.error('Не достаточно данных');
  } else if (isNaN(a)) {
    console.error(`Значение ${a} не является числом`);
  } else if (isNaN(b)) {
    console.error(`Значение ${b} не является числом`);
  } else if (isNaN(c)) {
    console.error(`Значение ${c} не является числом`);
  } else {
    return `D = ${(b ** 2) - 4 * +a * +c}`;
  }
}

discr(2, 5, -7);

// (4)
function square(num) {
  if (isNaN(num)) {
    console.error(`Значение ${num} не является числом`);
  } else if (num === undefined) {
    console.error('Число не передано');
  } else {
    return num ** 2;
  }
}

square(2);

// (5)
function sumTo(num) {
  if (isNaN(num)) {
    console.error('Не корректное значение');
  } else if (num === undefined) {
    console.error('Число не передано');
  } else if (num === 1) {
    return 1;
  } else {
    return +num + sumTo(num - 1);
  }
}

sumTo(10);

// (6)
function fib(num) {
  if (isNaN(num)) {
    console.error('Не корректное значение');
  } else if (num === undefined) {
    console.error('Число не передано');
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}

fib(5);
