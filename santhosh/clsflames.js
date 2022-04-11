class Flames{
    constructor(fname, sname){
        this.fname = fname;
        this.sname = sname;

        this.a = this.fname.toLowerCase().replace(/s/g,"");
        this.b = this.sname.toLowerCase().replace(/s/g,"");
        this.getDiff();
        this.getRelation();
    }
    getDiff(){
        for(let i=0;i < this.a.length; i++){
            for(let j=0;j < this.b.length; j++){
                if(this.a[i] === this.b[j]){
                    this.a = this.a.replace(this.a[i],"");
                    this.b = this.b.replace(this.b[j],"");
                    this.getDiff();
                }
            }
        }
        this.diffcontent = this.a + this.b;
        this.diff = this.a.length + this.b.length;
        return this.diff;
    }
    getRelation(){
        const Relationship = {
            0 : "Friends",
            1 : "Lovers",
            2 : "Affection",
            3 : "Marriage",
            4 : "Enemies",
            5 : "Sister"
        };
        let modular = this.diff % 6;
        this.relation = Relationship[modular];
    }
}
let a = "santhosh";
let b = "kumar";
const Relationship = new Flames(a, b);
console.log(Relationship.relation);