//var age: number = 20
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//var age: number="too old"
// function printPerson(name:string, age:number){
//     //console.log(`Name: ${name} age:${age}`)
// }
// //printPerson("Billy",8)
// printPerson(8,"Billy")
var Product = /** @class */ (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID: " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
var Tour = /** @class */ (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
var Dining = /** @class */ (function (_super) {
    __extends(Dining, _super);
    function Dining(id, cuisine, childPrice) {
        var _this = _super.call(this, id) || this;
        _this.cuisine = cuisine;
        _this.childPrice = childPrice;
        return _this;
    }
    Dining.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Cuisine: " + this.cuisine);
        console.log("ChildPrice: " + this.childPrice);
    };
    return Dining;
}(Product));
function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File: %s", op.file);
    console.log("Max size: %s", op.maxSize);
}
function cancelBooking(c) {
    console.log("Cancelling booking. charges: %d", c.cancelationFee);
}
function cancelBooking2(c) {
    console.log("Cancelling: %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
function test(p) {
    p.printDetails();
}
var t = new Tour(1, "8 hours");
t.title = "Trip to the taj mahal";
t.price = 1200;
t.cancelationFee = 100;
//cancelBooking(t)
//cancelBooking2(t)
test(t);
configSomething({
    directory: "/dir1",
    file: "persons,json"
    // path: "persons,json"
});
var d = new Dining(2, " burger", 4);
d.title = "Trip to the NY";
d.price = 2000;
test(d);
//# sourceMappingURL=play.js.map