class BookList {
  constructor() {
    this.allBooks = [];
    this.nextBook = null;
    this.currentBook = null;
    this.lastBook = null;
  }
  add(book){
    this.allBooks.push(book.title);    
  }
  setCurrentBook(book) {
    if (this.currentBook === book)
      console.log(`You are already reading ${book.title} since ${book.startReadDate}`);
    else if (this._currentBook)
      console.log(`You can't add this book as the current book before finishing ${this.currentBook.title}`);
    else {
      book.startReadDate = new Date(Date.now());
      this.currentBook = book;
      console.log(`You just started reading ${book.title}`);
    }
  }
  showcurrentBook() {
     if(this.currentBook){
       console.log(`You are currently reading: ${this.currentBook.title}`);
     }
      else{
        console.log("You're not reading any book at the moment");
      } 
  }
  showlastBook() {
    if (!this.lastBook){
      console.log("You haven't been reading any Books!");
    } 
    else {
      console.log(`The last book you read was: ${this.lastBook.title}. You finished it on ${this.lastBook.endReadDate}`);
    } 
  }
  showbooksToRead() {
    console.log(this.allBooks.length);
  }
  
  finishCurrentBook() {
    if (!this._currentBook){
      console.log("You're not reading any book right now...");
    }
    else{
      this.currentBook.read = true;
      this.currentBook.endReadDate = new Date(Date.now());
      this._lastBook = this.currentBook;
      const cb = this.currentBook;
      this.currentBook = null;
      console.log(`You Finished the CurrentBook: ${cb.title} since ${cb.endReadDate}`);
    }
  }
}
class Book extends BookList {
  constructor(title, genre, author) {
    super();
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = null;
    this.startReadDate = null;
    this.endReadDate = null;
  }
}
const mylib=new BookList();
const c=new Book('c','programing','karthick');
const java=new Book('java','programing','richu villa');
mylib.add(c);
mylib.add(java);
console.log(mylib.allBooks);
mylib.setCurrentBook(c);
mylib.showcurrentBook();
mylib.finishCurrentBook();
mylib.showlastBook();
