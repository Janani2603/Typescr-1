var x = "UST";
console.log('up and working!' + x);
var y = 10.1;
console.warn("num type: ", y);
var z = true;
console.error("boolean type", z);
var a;
a = 'now its string';
console.warn(typeof a);
//let b:string|number|Date;
// b='true';
// console.warn(typeof b);
var data = [10, 20, 30, 40, 50];
data.push(60);
console.log(data.length);
data.forEach(function (num) { console.log(num); });
var d1 = ["fruits", 10, 25, 55, true];
console.log(d1[0] + d1[4]);
function printp(p, q) {
    return p * q;
}
console.log(printp(10, 20));
function printf(p, q) {
    if (q == undefined) {
        return p * p;
    }
    else {
        return p * q;
    }
}
console.log(printf(10));
var product = /** @class */ (function () {
    function product(pid, desc, price) {
        this.pid = pid;
        this.desc = desc;
        this.price = price;
    }
    product.prototype.printall = function () {
        console.log("pid : ", this.pid);
        console.log("desc : ", this.desc);
        console.log("price : ", this.price);
    };
    return product;
}());
var p = new product(101, 'book', 200);
console.log(p.printall());
