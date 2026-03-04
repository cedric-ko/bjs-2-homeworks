//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = md5(JSON.stringify(args)); // получаем правильный хеш c помощью функции md5

    let objectInCache = cache.find(item => item.hash === hash);  // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) {  // если элемент найде
      console.log("Из кеша: " + objectInCache.value); // выводим в консоли текст со значением объекта в кеше
      return "Из кеша: " + objectInCache.value;  // возвращаем текст со значением объекта в кеше
    }
    
    let result = func(...args);

    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой

    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  // возвращаем результат функции
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null; // идентификатор таймаутов, первоначально не имеет значения
  wrapper.count = 0; // счётчик вызова функции
  wrapper.allCount = 0; // счётчик вызова декоратора

  function wrapper(...args) {
    if (!timeoutId) { // если нет таймаута (первый вызов), функция вызывается моментально
      func.call(this, ...args);
      wrapper.count++; // увеличиваем счётчик вызовов на 1
    }
    if (timeoutId) { // если таймаут существует
      console.log("Текущий таймаут удалён");
      clearTimeout(timeoutId); // удаляем его
    }

    console.log("Устанавливаем новый таймаут");
    timeoutId = setTimeout(() => {
      func.call(this, ...args); // вызываем функцию с задержкой (ниже)
      wrapper.count++; // увеличиваем счётчик вызовов на 1
    }, delay); // показатель задержки

    wrapper.allCount++; // увеличиваем счётчик вызовов декоратора на 1
  }

  return wrapper;
}

