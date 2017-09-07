//Namespace here includes funciton only
namespace Nm {
    //function exported to be consumed via namespace in the bundle file
    export const multiply = (a: number, b: number): string => {
        return (`Mutiplication of ${a} and ${b} is ${a * b}`);
    }
}