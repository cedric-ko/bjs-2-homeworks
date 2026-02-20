// Задача 1. Печатное издание
class PrintEditionItem { // 1. Создаём базовый класс с указанными свойствами
  constructor(name, releaseDate, pagesCount) { // конструктор базового класса
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() { // 2. Создаём метод класса для починки экземпляров
    this.state = this.state * 1.5;
  }

  set state(newState) { // 3. Создаём сеттер для установки состояния экземпляров
    if (newState < 0) { // если новое состояние меньше нуля...
      this._state = 0; // ... сеттер устанавливает 0
    } 
    if (newState > 100) { // если новое состояние больше 100...
      this._state = 100; // ... сеттер устанавливает 100
    } else {
      this._state = newState; // иначе устанавливается значение аргумента
    }
  }

  get state() { // 4. Создаём геттер для проверки состояния экземпляра
    return this._state;
  }
}

class Magazine extends PrintEditionItem { // 5. Создаём класс журнала, наследуемый от базового класа
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem { // 6. Создаём класс книги, наследуемый от базового класса
  constructor(author, name, releaseDate, pagesCount) { // конструктор книги принимает дополнительным аргументом автора
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

// 7. Создаём классы, наследуемые от книги
class NovelBook extends Book { // роман
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book { // фантастика
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book { // детектив
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2. Библиотека
class Library { // 1. Создаём класс библиотеки
  constructor(name) { // конструктор класса
    this.name = name;
    this.books = []; 
  }

  addBook(book) { //2. Метод добавления книги в хранилище
    if (book.state > 30) { // если состояние книги больше 30...
      this.books.push(book); // ... она добавляется в массив
    } 
  }

  findBookBy(type, value) { // 3. Метод поиска книг
    // для каждого элемента массива books проверяем ключ и соответствующее ему значение
    const foundBook = this.books.find(book => book[type] === value); 
    if (foundBook) { // возвращаем найденную книгу...
      return foundBook;
    } else { // ... иначе null
      return null;
    } 
  }
  
  giveBookByName(bookName) { // 4. Метод поиска книги по имени
    // для каждого элемента массива books проверяем, равен ли параметр имени аргументу функции
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) { // если результат поиска не является false
      // вырезаем из массива книг "кусок" длиной в 1 элемент от найденного индекса и сохраняем в переменной
      const [book] = this.books.splice(index, 1); 
      return book; // возвращаем переменную
    }
    return null;
  }
}

