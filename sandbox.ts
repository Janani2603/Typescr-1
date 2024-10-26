let x:string="UST";
console.log('up and working!'+x) ;
const y:number=10.1;
console.warn("num type: ",y);
var z:boolean = true;
console.error("boolean type",z);
let a:any;
a='now its string';
console.warn(typeof a);
//let b:string|number|Date;
// b='true';
// console.warn(typeof b);
let data:number[]=[10,20,30,40,50];
data.push(60);
console.log(data.length);
data.forEach(
    (num)=>{console.log(num)}
);
let d1:any[]=["fruits",10,25,55,true]
console.log(d1[0]+d1[4]);
function printp(p:number,q:number):number{
    return p*q;
}
console.log(printp(10,20));
function printf(p:number,q?:number):number{
    if(q==undefined){
        return p*p;
    }
    else{
        return p*q;
    }
   
}
console.log(printf(10));

class product{
    private pid:number;
    private desc:string;
    private price:number;
    constructor(pid:number,desc:string,price:number){
        this.pid=pid;
        this.desc=desc;
        this.price=price;

    }
    public printall(){
        console.log("pid : ",this.pid);
        console.log("desc : ",this.desc);
        console.log("price : ",this.price);
    }
   
}
let p=new product(101,'book',200);
console.log(p.printall());
