class BookList {
    #secretList = [];
    #password = null;
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
          `You can't add this book as the current book before finishing $
  {this._currentBook._title}`
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
      if (!this._lastBook) console.log("You haven't been reading much lately you
  naughty geek!")
      else return console.log(`The last book you read was: $
  {this._lastBook._title}. You finished it on ${this._lastBook._endReadDate}`);
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
          )} minutes!\n\nNow, would you like to select the next book to read ? 
  Say "yes" or "no"`
        );
        if (askForNext === "yes" || askForNext === "y") {
          const booksLeft = this._allBooks.filter((b) => !b._read)
          if (!booksLeft.length) alert('Oups, you have read all your books 
  already!')
          else {
            let question = "Cool! Which book would you like to read next ? You 
  still have those left to read: \n
            booksLeft.forEach((b, i) => question += `\n - ${b._title} - enter $
  {i} \n`)
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
        console.log("You've read all the books in your list! Why not add 
  some?");
      else {
        const booksLeft = this._allBooks.filter(
          (b) => !b._read && this._currentBook !== b
        );
        const randomSelectedBook = booksLeft[randomBook(booksLeft.length)];
        console.log(
          `Why not try ${randomSelectedBook._title} written by $
  {randomSelectedBook._author} ? Sounds like a good ${randomSelectedBook._genre}
  book!`
        );
      }
    }
    // The following methods make use of Class Fields; which are quite new, and 
  still not widely
    // supported by browsers (and only Node 12+) /!\ so use with caution /!\
    // They allow to set really private (language enforced) properties & methods
  within a class
    // https://www.sitepoint.com/javascript-private-class-fields/
    // https://javascript.info/private-protected-properties-methods
    // For more widely supported (but not as secure & harder to use) ways of 
  setting "privacy" within a class
    // please check out Symbols and WeakMaps 
  (https://curiosity-driven.org/private-properties-in-javascript)
    addSecret(book) {
      if (!this.#password) {
        alert("You need to set a password to use the secret book list...");
        const isPasswordSet = this.setPassword();
        if (isPasswordSet)
          alert("The book has been successfully added to your secret list");
      }
      this.#secretList.push(book);
    }
    setPassword() {
      const askForNewPw = () => {
        const newPw = prompt("Please enter a new password");
        if (!newPw) {
          alert("You need to enter a password");
          return false;
        } else {
          this.#password = newPw;
          alert("New password set successfully");
          return true;
        }
      };
      if (!this.#password) {
        return askForNewPw();
      } else {
        const oldPw = prompt("Please enter your old password");
        if (oldPw === this.#password) {
          return askForNewPw();
        } else alert("Sorry, passwords don't match...");
      }
    }
    get secretList() {
      const pw = prompt(
        "Please enter your password to access the secret book list"
      );
      if (!pw || !this.#password || pw !== this.#password)
        alert("You cannot access this private data");
      else return this.#secretList;
    }
  }
  class Book extends BookList {
    constructor(title, genre, author) {
      super();
      this._title = title;
      this._genre = genre;
      this._author = author;
      this._read = false;
      this._startReadDate = null;
      this._endReadDate = null;
    }
  }
  const myLibrary = new BookList();
  const foundation = new Book("Foundation", "Science-fiction", "Isaac Asimov");
  const sapiens = new Book(
    "Sapiens: A Brief History of Humankind",
    "Non-fiction",
    "Yuval Noah Harari"
  );
  const autumn = new Book(
    "The Autumn of the Patriarch",
    "Magical realism",
    "Gabriel García Márquez"
  );
  const endgame = new Book("Endgame", "Play", "Samuel Beckett");
  const road = new Book("On the Road", "Novel", "Jack Kerouac");
  const sisyphus = new Book("The Myth of Sisyphus", "Essay", "Albert Camus");
  const booksHeld = [foundation, sapiens, autumn, endgame, road, sisyphus];
  booksHeld.map((b) => myLibrary.add(b));