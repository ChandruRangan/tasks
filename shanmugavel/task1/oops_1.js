class Booklist
{
Books=[] 
Readed_books;
notreaded_books=[];
Next_book;
Current_book;
Last_book;

add(x)
{
    this.Book.push(x);
    this.checkreaded(x);
}
finishCurrentBook()
{
if(!this.Current_book)
    {
        console.log("No books in current")
    }
else{
    this.Current_book.Read=true;
    this.Current_book.ReadDate=Date.now();
    this.Readed_books.push(this)
    this.Last_book=this.Current_book;
    this.Current_book=this.notreaded_books.shift();
    this.Next_book=this.NotReaded[0];

}
}
setCurrentBook(x)
{
    this.Current_book=a;
}
checkreaded(x)
{
    if(a.read==true)
    {
      this.Readed_books.push(x)
    }
else
    {
        this.NotReaded.push(x)
    }      
}
}
class Book{
    constructor(title,genre,author,read,ReadDate)
    {
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=read;
        this.ReadDate=ReadDate;
    }
}

var CNS = new Book("CNS","Academic","Robert",false,null);
var Cloud=new Book("Cloud","Academic","Wilson",false,null);
var Story=new Book("Story","Comics","Wilson",false,null);
var  King=new Book("King","Comics","Wilson",false,null);
var Queen=new Book("'Queen","Comics","Wilson",false,null);
 

var booklist=new booklist();
booklist.add(CNS);
booklist.add(Cloud);
booklist.add(Story);
booklist.add(King);
booklist.add(Queen);
console.log(booklist);
booklist.setCurrentBook();
booklist.finishCurrentBook();
console.log(booklist);
booklist.finishCurrentBook();
console.log(booklist); 