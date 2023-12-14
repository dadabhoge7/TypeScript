// interface nothing but contract
// interface are just a contract that you define have a set of rule whic are nothing but properties and method which a object should follow
// in interface all method are abstract method

interface IProduct {
    id: number;
    name: String;
    description?: string;
    price?: number;
    display(): void;
}

// class implements interface
class ABC implements IProduct{
    id: number;
    name: String;
    description?: string | undefined;
    price?: number;
    display(): void {
        throw new Error("Method not implemented.");
    }
}
var objABC = new ABC();
objABC.id = 101;
objABC.name = "john";
objABC.display();


var product1 : IProduct = {
    id : 12,
    name : "iPhone",
    price : 1234,
    display: function() : void {
        console.log(this.id+" "+this.name);
    }
}
console.log(product1);

