const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id); 
}

// Destructuring 

/*

const book = getBook(3);
book


// Destructuring very very useful at the time whenever we need to get some data out of an object or out of an array

// const title = book.title;
// title
// const author = book.author;
// author
const{title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;
console.log(title,author, genres)


// const[primaryGenres, secondaryGenres] = genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenres,secondaryGenres);


// Rest/Spread Operator
// Rest
const[primaryGenres, secondaryGenres, ...otherGenres] = genres;

console.log(primaryGenres, secondaryGenres, otherGenres);

// Spread Operator 

// Let say we want to add a new genres into the existing genres
// const newGenres =  [genres, 'Epic fantasy']
// newGenres;

// but new genres added as a new array not into existing array and we don't want this
// We need spread operator for this

const newGenres = [...genres, 'Epic fatansy']
newGenres
// We can add at the begining and at the end


// Similarly we can use this spread operator to add the property for object as well
// Lets say we have to add new property movie publication date for a current book object
// const updatedBook = {book, moviePublicationDate:"2012-12-19"}
// updatedBook

// without using spread operator it is adding a new propety not into existing object

// const updatedBook = {...book, moviePublicationDate:"2012-12-19"}
// updatedBook

// We can override the existing property as well

const updatedBook = {
  ...book,
  moviePublicationDate:"2012-12-19",
  // pages:5000
}
updatedBook

// Template literals
const summary = `${title} is a book, ${pages} long, written by the ${author}, published in year ${publicationDate.split("-")[0]}
. The book has ${hasMovieAdaptation ? "": "not" } been adapte as a movie`;

summary
console.log(summary)



// Ternary operators

const pagesRange = pages > 1000 ? 'over thousand' : "less than  1000"
pagesRange

console.log(`The book has ${pagesRange} pages`)


// Arrow functions

// Traditiona funtions
function getYear(str)
{
  return str.split("-")[0];
}

console.log(getYear(publicationDate));

// Arrow function
const getYear2 = (str) => 
  str.split("-")[0]

console.log(getYear(publicationDate));



// ========================================================================================================================================================================================================
// Short-circuting

// Short circuting for the && operator
console.log(true && "Some string")
console.log(false && "Some string")
console.log(hasMovieAdaptation && "This book has movie")


// Falsy values : 0, '', null, undefined
console.log('jonas' && "Some String")

// Short circuting if the first value is truthy it always return the second value
// if the first value is false then it always return the falsy value

console.log(0 && "the sanket") 


// Short- ciruting for the OR operator
// if the  firs value is true is return that first value
console.log(true || "Some string")
console.log(false || "Some string")

// Use : we can use this to set the default values
const spanishTranslation = book.translations.spanish || "NOT TRANSALATED"
spanishTranslation

// but in cases it have some consquesenses as well
// console.log(book.reviews.librarything.reviewsCount)
// const countWrong = book.reviews.librarything.reviewsCount || "NO DATA"
// countWrong
// // there is 0 reviewas but it shows no data
// // To solve this problem Javascript added new operator i.e  nullish coalescing operator
// // When only null and undefined at that time only it gives second value

// const count = book.reviews.librarything.reviewsCount ?? "NO DATA"
// count

*/

// Optional Chaning operator

// There are two reviews for the each book that is goodreads and library anything we need to the function that gives the  total count

function getTotalReviewCount(book)
{
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything
  return goodreads + librarything;
}

// Get a error cannot read properties of undefined reding reviewscount because book number 3 haven't the librarything review so its taked undefined
// Modern Javascript have the solution i.e optional chaning which is  make undefined part to nan
// and we can set the default value if it is undefined by using the nullish coalescing operator
// console.log(getTotalReviewCount(book))




// Array map method

const books = getBooks();
books

const titles = books.map((book) => book.title)
titles

const essentialData = books.map((book) => {
  return{
    title:book.title,
    author:book.author
  }
})

essentialData

const essentialData2 = books.map((book) =>
  ({
    title:book.title,
    author:book.author,
    reviewsCount: getTotalReviewCount(book)
  })
)

essentialData2

// filter method of the array
const longBooks = books.filter((book) => book.pages > 500);
longBooks

const longBooksWithMovie= books.filter((book) => book.pages > 500)
     .filter((book) => book.hasMovieAdaptation)

const adventureBooks = books.filter((book) => book.genres.includes("adventure"))
.map(book => book.title)
adventureBooks