class Booklist{
 Readedbooks=[];
 NotReaded=[];
 Nextbook=null;
 Currentbook=null;
 Lastbook=null;
 Books=[];
 add(a){
     this.Books.push(a);
     this.checkReaded(a);
 }
 finishCurrentBook(){
    if(!this.Currentbook){
        console.log("no books in Current ")
    }
    else{
        this.Currentbook.Read=true;
        this.Currentbook.ReadDate=Date.now();
        this.Readedbooks.push(this)
        this.Lastbook=this.Currentbook;
        this.Currentbook=this.NotReaded.shift();
        this.Nextbook=this.NotReaded[0];
        
    }
 }
 setCurrentBook(a){
     this.Currentbook=a;
     //this.Nextbook=this.NotReaded[0];
 }
 checkReaded(a){
    if( a.Read==true){
     this.Readedbooks.push(a);
    }
    else{
        this.NotReaded.push(a);
    }
}
 
 
}
class Book  {
    constructor(Title,Genre,Author,Read,ReadDate){
     this.Title=Title;
     this.Genre=Genre;
     this.Author=Author;
     this.Read=Read;
     this.ReadDate=ReadDate;
    }
}

var CNS= new Book("CNS","Academic","Robert",false,null);
var Cloud= new Book("Cloud","Academic","Wilson",false,null);
var Story= new Book("Story","Comics","Wilson",false,null);
var King= new Book("King","Comics","Wilson",false,null);
var Queen= new Book("Queen","Comics","Wilson",false,null);


var booklist=new Booklist();
booklist.add(CNS);
booklist.add(Cloud);
booklist.add(Story);
booklist.add(King);
booklist.add(Queen);
console.log(booklist);
booklist.setCurrentBook(CNS);
booklist.finishCurrentBook();
console.log(booklist);
booklist.finishCurrentBook();
console.log(booklist);
