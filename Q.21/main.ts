let personalInfo = {
    Name: "Sufyan",
    Age: 21,
    RollNo: 9211,
    Slot: "Night (7-10 PM)"

}

console.log(personalInfo);

/*
In TypeScript, an object can be created using various methods, similar to JavaScript. However, TypeScript allows you to define types or interfaces for objects, which makes it easier to work with them by enforcing a specific structure.

Here are some common ways to create objects in TypeScript:

***********************************************************

1. Basic Object Creation
You can create an object in TypeScript using the object literal syntax:


let person = {
    name: "John",
    age: 30,
    isStudent: false
};

***********************************************************

2. Using an Interface
You can define an interface to specify the structure of an object:


interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person: Person = {
    name: "John",
    age: 30,
    isStudent: false
};

***********************************************************

3. Using a Type Alias
You can also use a type alias, which is similar to an interface:

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let person: Person = {
    name: "John",
    age: 30,
    isStudent: false
};

***********************************************************

4. Creating an Object with a Class
You can create a class and instantiate an object from it:

class Person {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

let person = new Person("John", 30, false);

***********************************************************

Explanation:
Interface and Type Alias: Both interface and type define the structure of an object. They are used to enforce the shape of an object, making the code more maintainable and less prone to errors.

Classes: Define object templates with properties and methods. Classes are used to create objects with encapsulation and inheritance.

Object Literals: These are simple ways to create objects without any predefined structure.

Using these approaches, you can create structured and type-safe objects in TypeScript. Let me know if you need further details on any specific method!
*/