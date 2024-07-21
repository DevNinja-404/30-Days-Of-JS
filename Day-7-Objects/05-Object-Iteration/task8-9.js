// task8 -  Use a for...in loop to iterate over the properties of the book object and log each property and its value

const book = {
  title: "JJK-Part-1",
  author: "Tanjiro Kamado",
  year: 2000,
  getBookInfo: function () {
    return `Title : ${this.title}\nYear : ${this.year}`;
  },
};

for (const key in book) {
  console.log(`Key : ${key} and Value : ${book[key]}`);
}

// task9 -  Use Object.keys and Object.values methods to log all the keys and values of the object
console.log("Keys : -------------");
console.log(Object.keys(book));
console.log("Values : -------------");
console.log(Object.values(book));
