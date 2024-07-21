// task5 -  Create a nested object representing a library with properties like name and books(an array of objects) and log the library object to the console

const library = {
  name: "PersonalDevlopment Library",
  books: [
    { title: "JJK-Part-1", author: "Tanjiro Kamado", year: 2000 },
    { title: "JJK-Part-2", author: "Tanjiro Kamado", year: 3000 },
    { title: "JJK-Part-3", author: "Tanjiro Kamado", year: 4000 },
    { title: "JJK-Part-4", author: "Tanjiro Kamado", year: 5000 },
  ],
};

console.log(library);

// task6 - Access and log the name of the library and the titles of all the books in the library
console.log(library.name);

library.books.forEach((eachBook) => console.log(eachBook.title));
