class BookList {
    constructor() {
      this._allBooks = [];
      this._nextBook = null;
      this._currentBook = null;
      this._lastBook = null;
    }
  
    add(book) {
      this._allBooks.push(book);
    }
  
    setCurrent(book) {
      if (this._currentBook === book)
        console.log(
          `You are already reading ${book._title} since ${book._startReadDate}`
        );
      else if (this._currentBook)
        console.log(
          `You can't add this book as the current book before finishing ${this._currentBook._title}`
        );
      else {
        book._startReadDate = new Date(Date.now());
        this._currentBook = book;
        console.log(`Yay! You just started reading ${book._title}`);
      }
    }
    get currentBook() {
      return this._currentBook
        ? console.log(`You are currently reading: ${this._currentBook._title}`)
        : console.log("You're not reading any book at the moment");
    }
    get lastBook() {
      if (!this._lastBook) console.log("You haven't been reading much lately you naughty geek!")
      else return console.log(`The last book you read was: ${this._lastBook._title}. You finished it on ${this._lastBook._endReadDate}`);
    }
    
    get booksToRead() {
      return this._allBooks.length
    }
  
    get booksRead() {
      return this._allBooks.filter((b) => b._read)
    }
  
    finishCurrentBook() {
      if (!this._currentBook)
        console.log("You're not reading any book right now...");
      else {
        const calculateElapsedTime = (start, end) => {
          const diff = end - start;
          return Math.round((diff/1000)/60);
        };
  
        this._currentBook._read = true;
        this._currentBook._endReadDate = new Date(Date.now());
        this._lastBook = this._currentBook;
        const cb = this._currentBook;
        this._currentBook = null;
        const askForNext = prompt(
          `You've successfully finished reading ${
            cb._title
          }! Congrats! It took you ${calculateElapsedTime(
            cb._startReadDate,
            cb._endReadDate
          )} minutes!\n\nNow, would you like to select the next book to read ? Say "yes" or "no"`
        );
        if (askForNext === "yes" || askForNext === "y") {
          const booksLeft = this._allBooks.filter((b) => !b._read)
          if (!booksLeft.length) alert('Oups, you have read all your books already!')
          else {
            let question = "Cool! Which book would you like to read next ? You still have those left to read: \n"
            booksLeft.forEach((b, i) => question += `\n - ${b._title} - enter ${i} \n`)
            const askWhich = prompt(question)
            this.setCurrent(booksLeft[parseInt(askWhich, 10)])
          }
        } else {
          console.log("Ok, take your time before picking up your next book :)")
        }
      }
    }
  
    recommendBook() {
      const randomBook = (max) => Math.floor(Math.random() * max);
      if (!this._allBooks.length)
        console.log("Your booklist is empty, cannot recommend one...");
      else if (!this._allBooks.filter((b) => !b._read))
        console.log("You've read all the books in your list! Why not add some?");
      else {
        const booksLeft = this._allBooks.filter(
          (b) => !b._read && this._currentBook !== b
        );
        const randomSelectedBook = booksLeft[randomBook(booksLeft.length)];
        console.log(
          `Why not try ${randomSelectedBook._title} written by ${randomSelectedBook._author} ? Sounds like a good ${randomSelectedBook._genre} book!`
        );
      }
    }
  }
  
  class Book extends BookList {
    constructor(title, genre, author,read,startReadDate,endReadDate) {
      super();
      this._title = title;
      this._genre = genre;
      this._author = author;
      this._read = read;
      this._startReadDate = startReadDate;
      this._endReadDate = endReadDate;
    }
  }
  const myLibrary = new BookList();
  const book1 = new Book("Software Engineering","Software", "Isaac Asimov","true","05-03-2022","10-03-2022");
  const book2 = new Book("Probability and Queueing Theory","Mathematics","Yuval Noah Harari","false","11-03-2022","15-03-2022");
  const book3 = new Book("Cryptography and Network Security","Security","Gabriel García Márquez","true","20-03-2022","25-03-2022");
  const book4 = new Book("Computer Networks", "Network", "Samuel Beckett","false","26-03-2022","30-03-2022");
  const book5 = new Book("Computer Architecture", "Architec", "Essay","true","31-03-2022","05-04-2022");
  const book6 = new Book("Information Technology", "Tech", "Albert Camus","false","06-04-2022","10-04-2022");
  const booksHeld = [book1, book2, book3, book4, book5, book6];
  booksHeld.map((b) => myLibrary.add(b));
  console.log(book1);
  console.log(book2);
  console.log(book3);
  console.log(book4);
  console.log(book5);
  console.log(book6);
  
 
  