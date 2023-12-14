interface IExterior {
    color : string;
    numOFDoors : number;
}
interface IInterior {
    seats : number;
    auto : boolean;
}
interface ICar extends IExterior, IInterior{
    make : string;
    model : string;
    year : number
}

var myCar : ICar = {
    make: "TATA",
    model: "Altroz",
    year: 2017,
    color: "Black",
    numOFDoors: 4,
    seats: 4,
    auto: false
}

console.log(myCar);
