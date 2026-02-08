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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
