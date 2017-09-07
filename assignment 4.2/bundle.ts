//Namespace files path referenced 
///<reference path="./interface.ts"/>
///<reference path="./function.ts"/>

//imported person interface and mutiply function
import Interface = Nm.Person;
import Multiply = Nm.multiply;

//Const John implements interface Person from the interface file through Nm namespace
const John: Interface = {
    name: "John",
    lastname: "Doe",
    greet(): void {
        console.log(`Hello ${this.name} ${this.lastname}`);
    }
}

//substraction function accessed from interface file through namespace Nm
const substraction = Nm.substraction(4, 1);

//substraction constant logged to console
console.log(substraction);

//function multiply invoked and accessed from function file through namespace Nm
console.log(Multiply(9, 4));

