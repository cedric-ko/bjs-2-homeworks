function getArrayParams(...arr) {
  let min = arr[0]; // назначаем первый элемент массива в качестве минимума
  let max = arr[0]; // назначаем первый элемент массива в качестве максимума
  let sum = 0;      // призваиваем сумме элементов массива значение 0
  
  for (let i = 0; i < arr.length; i++) { // проходим по всем элементам массива
    if (arr[i] > max) {
      max = arr[i]; // находим новый максимум, если он есть
    }
    
    if (arr[i] < min) { // находим новый минимум, если он есть
      min = arr[i];
    }
    
    sum += arr[i]; // и складываем все значения элементов массива для поиска среднего значения
  }
  // вычисляем среднее значение, преобразуем в число и ограничиваем длинну после запятой двумя символами
  const avg = parseFloat((sum / arr.length).toFixed(2)); 
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) { // проверка наличия элементов в массиве
    return 0; // если в массиве 0 элементов, возвращаем 0
  }
  
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) { // проверка наличия элементов в массиве
    return 0; // если в массиве 0 элементов, возвращаем 0
  }
  
  const max = Math.max(...arr); // вычисляем максимальное из значений элементов массива
  const min = Math.min(...arr); // вычисляем минимальное из значений элементов массива
  
  return max - min; // возвращаем разницу значений
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) { // проверка наличия элементов в массиве
    return 0; // если в массиве 0 элементов, возвращаем 0
  }

  let sumEvenElement = 0;  // инициализируем переменную с суммой чётных значений, равной нулю
  let sumOddElement = 0;   // инициализируем переменную с суммой нечётных значений, равной нулю
  
  for (let i = 0; i < arr.length; i++) { // проходим по элементам массива
    if (arr[i] % 2 === 0) { // если значение чётное, то есть остаток от деления на 2 равен 0
      sumEvenElement += arr[i]; // прибавляем его к сумме чётных значений 
    } else {
      sumOddElement += arr[i]; // иначе прибавляем его к сумме нечётных значений
    }
  }
  
  return sumEvenElement - sumOddElement; // возвращаем разницу сумм чётных и нечётных значений
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) { // проверка наличия элементов в массиве
    return 0; // если в массиве 0 элементов, возвращаем 0
  }

  let sumEvenElement = 0;  // инициализируем переменную с суммой чётных значений, равной нулю
  let countEvenElement = 0; // инициализируем переменную с количеством чётных значений, равным нулю
  
  for (let i = 0; i < arr.length; i++) { // проходим по элементам массива
    if (arr[i] % 2 === 0) { // если значение чётное
      sumEvenElement += arr[i]; // прибавляем его к сумме чётных значений
      countEvenElement++; // и увеличиваем счётчик чётных значений на 1
    }
  }
  
  return sumEvenElement / countEvenElement; // возвращаем среднее значение (делим сумму на количество значений)
}

function makeWork (arrOfArr, func) {

}
