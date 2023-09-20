// 1. create 2 book objects with properties: name, author, year.

const book1 = {
  name: "Harry Potter and the Philosopher's Stone",
  author: "J. K. Rowling",
  year: "1997",
};

const book2 = {
  name: "The Lord of the Rings",
  author: "J. R. R. Tolkien",
  year: "1954",
};

// 2. create an empty object bookUtils (utils = short for utilities).

// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
// const bookUtils { getFirstPublished:function (book1, book2) {
//       return book1.year < book2.year ? book2 : book1}};
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.

//  6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.

const bookUtils = {
  getFirstPublished: function (firstBook, secondBook) {
    if (firstBook.year < secondBook.year) {
      return secondBook;
    } else {
      return firstBook;
    }
  },
  setNewEdition: function (book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function (book, newLanguage) {
    book.language = newLanguage;
  },
  setTranslation: function (book, newLanguage, translator) {
    book.translation = {
      translator: translator,
      language: newLanguage,
    };
  },
  // 7. add to the bookUtils object a setPublisher function, that
  // receives a book a name and location, and sets a new
  // property named publisher, which is an object that contains
  // the name and location.
  setPublisher: function (book, name, location) {
    book.publisher = {
      publisher: name,

      country: location,
    };
  },
  //   8. add to the bookUtils object a function isSamePublisher,
  // which receives 2 books and checks if the publisher name
  // and location are identical in the 2 books.
  isSamePublisher: function (firstBook, secondBook) {
    if (
      firstBook.publisher &&
      secondBook.publisher &&
      firstBook.publisher.publisher === secondBook.publisher.publisher &&
      firstBook.publisher.country === secondBook.publisher.country
    ) {
      return true;
    } else {
      return false;
    }
  },
};

bookUtils.setNewEdition(book1, 2022);
bookUtils.setLanguage(book1, "Russian");
bookUtils.setTranslation(book1, "Russian", "Mony");
bookUtils.setPublisher(book1, "Gallimard", "France");
bookUtils.isSamePublisher(book1, book2);

console.log(book1);
