class booklist
{
  constructor()
  {
    this.allbooks=[];
    this.nextbook=null;
    this.currentbook=null;
    this.lastbook=null;
  }
  add(b)
  {
    this.allbooks.push(b.title);
  }
  setcurrentbook(b)
  {
    if(this.currentbook === b)
    {
      console.log(`your already reading ${b.title} from ${b.startreaddate}`);
    }
    else if(this.currentbook)
    {
      console.log(`first finish the ${b.currentbook.title} book`);
    }
    else
    {
      this.startreaddate=new Date(Date.now());
      this.currentbook=b;
      console.log(`start that book ${b.title}`);
    }
  }
  viewcurrentbook()
  {
    if(this.currentbook)
    {
      console.log(`your now reading this ${this.currentbook.title} book`);
    }
    else
    {
      console.log(`Not reading any one of the book at the moment`);
    }
  }
  completecurrentbook()
  {
    if(this.currentbook==null)
    {
      console.log(`Now you are not reading any book`);
    }
    else
    {
      this.currentbook.read=true;
      this.currentbook.endreaddate = new Date(Date.now());
      this.lastbook=this.currentbook;
      const ris=this.currentbook;
      this.currentbook=null;
      console.log(`you finished the book ${ris.title} the date is ${ris.endreaddate}`)
    }
  }
  viewlastbook()
  {
    if(this.lastbook==null)
    {
      console.log(`you have not read anny book`);
    }
    else
    {
      console.log(`last book is ${this.lastbook.title} the date is ${this.lastbook.endreaddate}`);
    }
  }
  viewallbook()
  {
    console.log(this.allbooks.length);
  }
}
class book extends booklist
{
  constructor(title,genre,author)
  {
    super();
    this.title=title;
    this.genre=genre;
    this.author=author;
    this.read=null;
    this.startreaddate=null;
    this.endreaddate=null;
  }
}
  const richu=new booklist;
  const marvel=new book('marvel','avengers','stanlee');
  const harry=new book('harry','fantasy','jk rowling');
  const narniya=new book('narniya','fantasy','c.S.Lewis');
  const arcane=new book('arcane','animi','christian linke');
  richu.add(marvel);
  richu.add(harry);
  richu.add(narniya);
  richu.add(arcane);
  console.log(richu.allbooks);
  richu.setcurrentbook(marvel);
  richu.viewcurrentbook();
  richu.completecurrentbook(marvel);
  richu.viewlastbook();
  richu.viewallbook();