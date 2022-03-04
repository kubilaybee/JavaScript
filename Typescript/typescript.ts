// let a: string;
// let b: number;
// let c: boolean;
// let d: any; //dinamik

// a = "Hello World";
// b = 22;
// c = true;
// d = 32;

// console.log(a, b, c, d);
// arrays
// let langs: string[];
// let numbers: number[];
// let boolValues: Array<boolean>;
// let a: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

// langs = ["php", "java", "c++", "python"];
// numbers = [1, 2, 3, 4, 5];
// boolValues = [true, false, false];

// console.log(...langs);
// console.log(...numbers);
// console.log(...boolValues);
// console.log(...a);
// functions
// function addNumber(num1: number, num2: number) {
//   console.log(num1 + num2);
// }

// addNumber(10, 20);
// optional variable of function
// function addNumber(num1: number, num2?: number): number {
//   if (typeof num2 === "undefined") {
//     return num1;
//   }
//   return num1 + num2;
// }

// console.log(addNumber(10));
// default variable
// function addNumber(num1: number, num2: number = 100): number {
//   return num1 + num2;
// }

// console.log(addNumber(10));
// console.log(addNumber(10, 20));

// function addNumber(num1: number, num2: number): void {
//   console.log(num1 + num2);
//   return;
// }

// addNumber(10, 20);

// class
// class Person {
//   name: string;
//   age: number;
//   private phone: string;

//   constructor(name: string, age: number, phone: string) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;

//     console.log("Kişi Oluşturuldu");
//   }
//   showInfos() {
//     console.log(`İsim: ${this.name} Yaş: ${this.age} Tel: ${this.phone}`);
//   }
// }

// class Employee extends Person {
//   salary: number;

//   constructor(name: string, age: number, phone: string, salary: number) {
//     super(name, age, phone);
//     this.salary = salary;
//   }

//   // overriding
//   showInfos(): void {
//     super.showInfos();
//     console.log(`Maaş: ${this.salary}`);
//   }

//   changeDepartent() {
//     console.log("Departman Değiştiriliyor..");
//   }
// }

// let person1 = new Person("Kubilay", 28, "1234567890");
// person1.showInfos();

// let employee1 = new Employee("Ekrem", 34, "1231231221", 2000);
// employee1.showInfos();

// interface
