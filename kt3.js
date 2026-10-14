// Задача 1
{
  function checkElem(num) {
    console.log(num % 7 === 0);
  }
  checkElem(13);
}

// Задача 2
{
  function changeElem(array, n) {
    return array.map(elem => elem * n);
  }
  let array = [1, 2, 3, 4];
  console.log(changeElem(array, 3));
}

// Задача 3
{
  function sumElems(array) {
    return array.reduce((sum, elem) => {
      let num = Number(elem);
      return Number.isNaN(num) ? sum : sum + num;
    }, 0);
  }
  console.log(sumElems(['10', 'Строка', '5g', '15', '05']));
}

// Задача 4
{
  function reverseIndex(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    console.log(result);
  }
  reverseIndex([1, 2, 3, 4, 5]);
}

// Задача 5
{
  function checkElem(array, callback) {
    return array.some(callback);
  }
  console.log(checkElem([1, 2, 3, 4], elem => elem === 3));
}
