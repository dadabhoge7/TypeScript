// interface nothing but contract
// interface are just a contract that you define have a set of rule whic are nothing but properties and method which a object should follow
// in interface all method are abstract method
// class implements interface
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return ABC;
}());
var objABC = new ABC();
objABC.id = 101;
objABC.name = "john";
objABC.display();
var product1 = {
    id: 12,
    name: "iPhone",
    price: 1234,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log(product1);
