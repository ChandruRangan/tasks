class Listofbooks {
  constructor() {
    this.liveBooks = [];
    this.nextBook = null;
    this.currentBook = null;
    this.lastBook = null;
  }
  add(b) {
    this.liveBooks.push(b);
  }
  setCurrent(b) {
    if (this.currentBook === b)
      console.log(
        `You are already reading ${b.title} since ${b.start_Date}`
      );
    else if (this.currentBook)
      console.log(`You cannot add this book as the current book before finishing ${this.currentBook.title}`);
    else {
      b.start_Date = new Date(Date.now());
      this.currentBook = b;
      console.log(`You just started reading ${b.title}`);
    }
  }
  getcurrentBook() {
    if( this.currentBook){
      console.log(`You are aldready reading: ${this.currentBook.title}`)
    }else{
      console.log("You are not reading any book at the moment");
    }
  }
  getlastBook() {
    if (!this.lastBook) console.log("You haven't read anything lately")
    else return console.log(`The last book you read was: ${this.lastBook.title}. You finished it on ${this.lastBook.end_Date}`);
  }
  
  getbooksToRead() {
    console.log(this.liveBooks.length);
  }
  finishCurrentBook() {
    if (!this.currentBook)
      console.log("You are not reading anys book right now...");
    else {
      this.currentBook.read = true;
      this.currentBook.end_Date = new Date(Date.now());
      this.lastBook = this.currentBook;
      const latest = this.currentBook;
      this.currentBook = null;
      console.log(`You have finished reading: ${latest.title} since ${latest.end_Date}`)
    }
    }
  }

class Book extends Listofbooks {
  constructor(title, genre, author, read, start_Date, end_Date) {
    super();
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.start_Date = start_Date;
    this.end_Date = end_Date;
  }
}
const library = new Listofbooks();
const Powerofmind = new Book("The power of your subconcious mind","Joseph Murphy","Non-fiction", "true", "2022-03-26","2022-04-2");
const harry = new Book("Harry potter","Fantasy","J.K Rowling",);
const journey = new Book("My journey","Non-fiction","Dr.APJ abdul kalam","true","2022-02-25","2022-04-06");
const avengers = new Book("Avengers", "comics", "Stan lee");
const jungle = new Book("The jungle book", "comics", "Rudyard Kipling");
const livebooksheld = [Powerofmind, harry, journey, avengers, jungle];
livebooksheld.map((book) => library.add(book));

 console.log(library.liveBooks);
library.setCurrent(harry);
library.getcurrentBook();
library.finishCurrentBook(harry);
library.getlastBook();
library.getbooksToRead();