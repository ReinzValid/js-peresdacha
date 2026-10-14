// Задача 1
{
  let price = 10000;
  let range = 'day';
  if (range === 'day') {
    console.log(`${price} Р в день`);
  } else if (range === 'month') {
    console.log(`${price} Р в месяц`);
  } else if (range === 'week') {
    console.log(`${price} Р в неделю`);
  }
}

// Задача 2
{
  let temp = 25;
  let weather = 'clear';
  let activity;
  if (temp >= 25 && weather === 'clear') {
    activity = 'golf';
  } else if ((temp >= 10 && temp <= 24) || weather === 'cloudy') {
    activity = 'bowling';
  } else {
    activity = 'hiking';
  }
  console.log(activity);
}

// Задача 3.1
{
  let a = 2;
  let b = 6;
  let sign = '*';
  switch (sign) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      console.log(a / b);
      break;
  }
}

// Задача 3.2
{
  let a = 2;
  let b = 0;
  let sign = '/';
  switch (sign) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      console.log(b === 0 ? 'Делить на 0 нельзя!' : a / b);
      break;
  }
}

// Задача 4
{
  let word = 'меню';
  let result = Number.isInteger(Math.sqrt(word.length)) ? 1 : 0;
  console.log(result);
}
