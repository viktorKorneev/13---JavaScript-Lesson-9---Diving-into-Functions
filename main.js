const favoriteBooks = [
  {
    id: 1,
    title: "Head First JavaScript Programming",
    author: "Eric Freeman",
    price: 29.99,
    genre: "Programming",
  },
  {
    id: 2,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 39.99,
    genre: "Programming",
  },
  {
    id: 3,
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    price: 49.99,
    genre: "Programming",
  },
  {
    id: 4,
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 29.99,
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    price: 19.99,
    genre: "Fantasy",
  },
];

favoriteBooks.forEach((book) => {
  console.log(book.author);
});
// ----------------------------------------
const logAuthor = (book) => {
  console.log(book.author);
};

favoriteBooks.forEach(logAuthor);
// --------------------------------------

const programmingBook = favoriteBooks.filter((book) => {
	return book.genre === 'Programming'
})
// -----------------------------------------

const bookTitles = favoriteBooks.map((book) => {
    return book.title
  })
// ---------------------------------------------

const numbers = [10, 5, 100, 2, 1000]
numbers.sort((prev, next) => {
    return prev- next
})
console.log(numbers)





// for (let i = 0; i < favoriteBooks.length; i++) {
//   const book = favoriteBooks[i];
//   console.log(book.author);
// }

// name();
// // function declaration
// function name(params) {}

// // fuction expression
// const name1 = function name(params) {};

// // Стрелочные функции
// const name2 = (params) => {};

// // printBookAuthors(favoriteBooks)

// const printBookAuthors = (books) => {
//   let count = 0;
//   while (count < books.length) {
//     const book = books[count];

//     console.log(printBookAuthors);
//     count++;
//   }
// };

// printBookAuthors(favoriteBooks);

//   const printCheapBooks = (books) => {
//     for (let i = 0; i < books.length; i++) {
//       const book = books[i]

//       if (book.price < 30) {
//         console.log(`${book.title} - ${book.price}`)
//       }
//     }
//   }

//   const logAuthor = (book) => {
//     console.log(book.author)
//   }

//   const logCheapBooks = (book) => {
//     if (book.price < 30) {
//       console.log(`${book.title} - ${book.price}`)
//     }
//   }

//   const authors = (books)  => {
//     for (let i = 0; i < books.length; i++) {
//       const book = books[i]
//       logAuthor(book)
//     }
//   }
// authors(favoriteBooks);

//   const prices = (books, func) => {
//     for (let i = 0; i < books.length; i++){
//         const book = books[i]
//         func(book)
//     }
//   }
// prices(favoriteBooks, logAuthor);
// prices(favoriteBooks, logCheapBooks);
