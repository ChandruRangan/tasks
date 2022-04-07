class Booklist{
    constructor(){
        this.allBooks = [];
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null
    }
    setcurrentBook(book){
        if(this.currentBook===book){
            console.log(`You are already reading ${book.name} since ${book.startReadDate}`);
        }
        else if (this.currentBook){
            console.log(`You can't add this book as the current book before finishing ${this.currentBook.name}`);
        }
        else {
            book.startReadDate = new Date(Date.now());
            this.currentBook = book;
            console.log(`You just started reading ${book.name}`);
          }
        } 
        add(book) {
            this.allBooks.push(book);
        }     
    getcurrentbook(){
        if(this.currentBook){
            console.log(`You are currently reading: ${this.currentBook.name}`)
        }
        else{
            console.log("You're not reading any book at the moment");
        }     
    }
    getlastBook() {
        if (!this.lastBook){
            console.log("You did't finsh any book");
        }
        else{
            console.log(`The last book you read was: ${this.lastBook.name}. You finished it on ${this.lastBook.endReadDate}`)
        }    
    }
    getbooksToRead() {
        return this.allBooks.length
    }
    finishCurrentBook() {
        if (!this.currentBook)
          console.log("You're not reading any books");
        else {
          this.currentBook.read = true;
          this.currentBook.endReadDate = new Date(Date.now());
          this.lastBook = this.currentBook;
          const cb = this.currentBook;
          this.currentBook = null;
          console.log(`You just finised this  ${cb.name} book on ${cb.endReadDate}`)
        }
    }                                                                                                                                                                                                                                                                        
}

class Book extends Booklist{
    constructor (name, genre, author){
        super();
        this.name = name;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.startReadDate = null;
        this.endReadDate = null;
    }
    getDetails(){
        return (`The name of the book is ${this.name},The genre of the book is ${this.genre},The author of the book ${this.author}.`)
    }

}
const lib = new Booklist();
const book1 = new Book("java", "Program","James Gosling");
const book2 = new Book("python", "Program","Guido van Rossum");
const book3 = new Book("Spiderman","Fantasy","Stan Lee");
const book4 = new Book("Batman","Fantasy","Bill Finger");
console.log(book1.name,book1.author,book1.genre);
console.log(book1.getDetails());
lib.add(book1);
lib.add(book2);
lib.add(book3);
lib.add(book4);
lib.setcurrentBook(book1);
lib.setcurrentBook(book2);
lib.getcurrentbook();
lib.getlastBook();
console.log(lib.getbooksToRead());
lib.finishCurrentBook();