// Задача 1
{
  let word = 'Арнольд';
  let result = '';
  for (let char of word) {
    if (char.toLowerCase() !== 'а' && char.toLowerCase() !== 'о') {
      result += char;
    }
  }
  console.log(result);
}

// Задача 2
{
  let num = 20;
  for (let i = 3; i <= num; i += 3) {
    console.log(i);
  }
}

// Задача 3
{
  let num = 5;
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i;
    console.log(result);
  }
}

// Задача 4
{
  let num = 4;
  let factorial = 1;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
    sum += factorial;
  }
  console.log(sum);
}

// Задача 5
{
  let word = 'потоп';
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(word === reversed ? 'YES' : 'NO');
}
