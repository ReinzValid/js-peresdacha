// Задача 1
{
  let obj = { price1: 100, price2: 150, price3: 200, price4: 100, price5: 150 };
  console.log(Object.values(obj).reduce((sum, value) => sum + value, 0));
}

// Задача 2
{
  let array = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'watermelon' },
    { id: 3, name: 'qiwi' },
    { id: 4, name: 'lemon' }
  ];
  console.log(array.map(obj => Object.values(obj)));
}

// Задача 3
function logString(...words) {
  console.log(words.join(' '));
}
logString('Hello', 'my', 'world!');

// Задача 4
function checkObj(obj) {
  return 'particle' in obj;
}

console.log(checkObj({ id: 1, particle: 10 }));
console.log(checkObj({ id: 2, name: 'tag' }));

// Задача 5
function generateArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null && typeof array[i] === 'object' && !Array.isArray(array[i])) {
      array[i] = Object.values(array[i]);
    }
  }
  return array;
}

console.log(generateArray([[1], { id: 40 }, [100], [300], { part: 10 }]));

// Задача 6
let users = [
  { id: 1, name: 'Alex', lastname: 'Wilyam', age: 20 },
  { id: 2, name: 'Steven', lastname: 'King', age: 34 }
];
let nextId = Math.max(0, ...users.map(user => user.id)) + 1;
function addUser(name, lastname, age) {
  let user = { id: nextId++, name, lastname, age };
  users.push(user);
  return user;
}

function updateUser(id, name, lastname, age) {
  let user = users.find(user => user.id === id);
  if (!user) {
    return false;
  }
  Object.assign(user, { name, lastname, age });
  return user;
}

function deleteUser(id) {
  let index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return false;
  }
  users.splice(index, 1);
  return true;
}

console.log(addUser('Anna', 'Ivanova', 21));
console.log(updateUser(3, 'Anna', 'Petrova', 22));
console.log(deleteUser(1));
console.log(users);

// Задача 7
let products = [
  {
    id: 1,
    title: 'велосипед',
    price: 45000,
    count: 3,
    marks: [4, 3, 5, 3]
  },
  {
    id: 2,
    title: 'ролики',
    price: 25000,
    count: 5,
    marks: [4, 3, 5, 5]
  },
  {
    id: 3,
    title: 'арбалет',
    price: 1700,
    count: 9,
    marks: [3, 3, 4, 5]
  },
  {
    id: 4,
    title: 'коньки',
    price: 4500,
    count: 3,
    marks: [4, 3, 4, 3]
  },
  {
    id: 5,
    title: 'ракетки',
    price: 900,
    count: 15,
    marks: [5, 3, 5, 3]
  },
  {
    id: 6,
    title: 'штанги',
    price: 14000,
    count: 5,
    marks: [3, 3, 3, 2]
  },
  {
    id: 7,
    title: 'стрелы',
    price: 1200,
    count: 55,
    marks: [3, 2, 4, 5]
  },
  {
    id: 8,
    title: 'мячи',
    price: 500,
    count: 49,
    marks: [5, 4, 4, 4]
  },
  {
    id: 9,
    title: 'сетка',
    price: 5000,
    count: 6,
    marks: [4, 5, 2, 5]
  },
  {
    id: 10,
    title: 'гантели',
    price: 3400,
    count: 12,
    marks: [3, 2, 4, 2]
  },
  {
    id: 11,
    title: 'маты',
    price: 16500,
    count: 7,
    marks: [4, 4, 4, 5]
  }
];

function solveProducts(products) {
  let task_1 = products.filter(product => product.count > 10);
  let task_2 = products.find(product => product.price >= 800 && product.price <= 900);
  let task_3 = [...products].sort((a, b) => b.price - a.price);
  let task_4 = products.reduce((sum, product) => sum + product.price * product.count, 0);
  let task_5 = products.map(({ marks, ...product }) => ({
    ...product,
    marks_total: marks.reduce((sum, mark) => sum + mark, 0)
  })).sort((a, b) => a.marks_total - b.marks_total);
  return { task_1, task_2, task_3, task_4, task_5 };
}

console.log(solveProducts(products));

// Задача 8
class Email {
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Email должен быть строкой');
    }
    this._email = value;
  }
}

let email1 = new Email('alex@example.com');
let email2 = new Email('anna@example.com');
email1.email = 'new@example.com';
console.log(email1.email, email2.email);

// Задача 9
class Contact extends Email {
  constructor(email, phone) {
    super(email);
    this._phone = phone;
  }
  get phone() {
    if (!this._phone.includes('+')) {
      return 'Неизвестный';
    }
    let length = this._phone.split('+').join('').length;
    if (length === 12) {
      return 'Мобильный';
    }
    if (length === 18) {
      return 'Городской';
    }
    return 'Неизвестный';
  }
}

let contact1 = new Contact('alex@example.com', '+123456789012');
let contact2 = new Contact('anna@example.com', '+123456789012345678');
contact2.email = 'contact@example.com';
console.log(contact1.email, contact1.phone);
console.log(contact2.email, contact2.phone);
