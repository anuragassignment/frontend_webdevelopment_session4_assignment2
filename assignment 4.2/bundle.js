var Nm;
(function (Nm) {
    Nm.substraction = function (a, b) { return ("Subtraction of " + a + " - " + b + " is " + (a - b)); };
})(Nm || (Nm = {}));
var Nm;
(function (Nm) {
    Nm.multiply = function (a, b) {
        return ("Mutiplication of " + a + " and " + b + " is " + a * b);
    };
})(Nm || (Nm = {}));
var Multiply = Nm.multiply;
var John = {
    name: "John",
    lastname: "Doe",
    greet: function () {
        console.log("Hello " + this.name + " " + this.lastname);
    }
};
var substraction = Nm.substraction(4, 1);
console.log(substraction);
console.log(Multiply(9, 4));
//# sourceMappingURL=bundle.js.map