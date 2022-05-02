class booklist{
    constructor(){
        this.allbooks = [];
        this.readedbooks = [];
        this.notreaded = [];
        this.currentbooks = null;
        this.lastbook = null;
        this.nextbook = null;
    }
    add(books){
        this.allbooks.push(books);
        this.checkreadedbook(books);
    }
    setcurrent(books){
        if(this.currentbooks === books){
            console.log(
                `You are already reading ${books.title} since ${books.readDate}`
                );
        }
        // else if (this.currentbooks){
        //     console.log(`You can't add this book as the current book before finishing ${this.currentbooks.title}`);
        // }
        else {
            book.readDate = new Date(Date.now());
            this.currentbooks = books;
            console.log(`You just started reading ${books.title}`);
          }
    }
    getcurrentbooks(){
        if(this.currentbooks){
            console.log(`You are already reading: ${this.currentbooks.title}`);
        }
        else{
            console.log("You're not reading any book at the moment");
        }
    }
     checkreadedbook(books){
         if( book.read == true){
          this.readedbooks.push(books);
         }
         else{
             this.notreaded.push(books);
         }
    } 
    finishcurrentbooks() {
        if (!this.currentbooks){
          console.log("You're not reading any book right now...");
        }
        else {
          this.currentbooks.read = true;
        //   this.currentbooks.endDate = new Date(Date.now());
          this.lastbook = this.currentbooks;
          const latest = this.currentbooks;
          this.currentbooks = null;
          console.log(`You have finished reading: ${latest.title} ${latest.readDate} since ${latest.endDate}`)
        }
    }
    getlastbook() {
        if (!this.lastbook) console.log("You haven't been reading much lately")
        else return console.log(`The last book you read was: ${this.lastbook.title}. You finished it on ${this.lastbook.endDate}`);
      }    
}
class book extends booklist {
    constructor(title,genre,author,read,readDate,endDate){
        super();
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
        this.endDate = endDate;
    }
}
const obj = new booklist();
const Powerofmind = new book("The power of your subconcious mind","Non-fiction","Joseph Murphy", "true", "2022-03-26","2022-04-2");
const harry = new book("A Brief History of Humankind","Non-fiction","Yuval Noah Harari");
const journey = new book("My journey","Non-fiction","Dr.APJ abdul kalam","true","2022-02-25","2022-04-06");
const avengers = new book("Avengers", "comics", "Stan lee","true","2022-04-08");
const jungle = new book("The jungle book", "comics", "Rudyard Kipling");
const livebooksheld = [Powerofmind, harry, journey, avengers, jungle];
livebooksheld.map((book) => obj.add(book));

console.log(obj.allbooks);
obj.setcurrent(avengers);
obj.getcurrentbooks();
obj.finishcurrentbooks();
obj.getlastbook();
obj.checkreadedbook();
