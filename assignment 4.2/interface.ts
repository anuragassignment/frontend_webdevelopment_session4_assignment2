//Namespace Nm includes an interce Person and a function substraction
namespace Nm {
    //interface person defined and exported to be consumed in the bundle file
    export interface Person {
        name: string;
        lastname: string;
        greet(): void;
    }

    //function substraction exported to be consumed in bundle file through namespace
    export const substraction = (a: number, b: number): string => (`Subtraction of ${a} - ${b} is ${a - b}`);
}



