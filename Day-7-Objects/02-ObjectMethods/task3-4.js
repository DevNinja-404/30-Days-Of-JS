// Add a method to the book object that returns a string with the book's title and author ,and log the result of calling this method

const book = {
  title: "JJK-Part-1",
  author: "Tanjiro Kamado",
  year: 2000,
  getBookInfo: function () {
    return `Title : ${this.title}\nAuthor : ${this.author}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
};

console.log(book.getBookInfo());
book.updateYear(5000);
console.log(book);
