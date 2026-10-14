// Задача 1
{
  let phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52'
  ];
  console.log(phones.map(phone => phone.slice(0, phone.lastIndexOf('.') + 2) + '****'));
}

// Задача 2
{
  let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
  ];
  console.log(cards.map(card => card.slice(0, 4) + '*****' + card.slice(-4)));
}

// Задача 3
function getInfo(prices) {
  return [
    prices.filter(price => price.startsWith('Цена')).length,
    prices.filter(price => price.endsWith('$')).length
  ];
}

let prices = [
  'Цена товара - 1200$', 'Стоимость - 500$', 'Цена не определена', '9999',
  'Ценовая категория - больше 300$', 'Цена за услугу 500 EUR', '150$'
];
console.log(getInfo(prices));

// Задача 4
function kingSayd(string) {
  console.log(string.startsWith('Король сказал:') ? string : 'Король сказал: ' + string);
}
kingSayd('сегодня хорошая погода');

// Задача 5
function isItFridayToday() {
  let day = new Date().getDay();
  if (day === 5) {
    console.log('Сегодня пятница!');
  } else if (day === 6) {
    console.log('Пятница была вчера');
  } else if (day === 4) {
    console.log('Завтра пятница!');
  } else {
    let n = (5 - day + 7) % 7;
    console.log(`Пятница будет через ${n} ${n >= 2 && n <= 4 ? 'дня' : 'дней'}`);
  }
}
isItFridayToday();
