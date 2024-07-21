// Add a method to the book object that uses the this keyword to return  a string with the book's title and year,and log the result of calling this method

const book = {
  title: "JJK-Part-1",
  author: "Tanjiro Kamado",
  year: 2000,
  getBookInfo: function () {
    return `Title : ${this.title}\nYear : ${this.year}`;
  },
};

console.log(book.getBookInfo());
