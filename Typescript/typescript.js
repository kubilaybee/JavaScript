// let a: string;
// let b: number;
// let c: boolean;
// let d: any; //dinamik
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//     console.log("Ki??i Olu??turuldu");
//   }
//   showInfos() {
//     console.log(`??sim: ${this.name} Ya??: ${this.age} Tel: ${this.phone}`);
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
//     console.log(`Maa??: ${this.salary}`);
//   }
//   changeDepartent() {
//     console.log("Departman De??i??tiriliyor..");
//   }
// }
// let person1 = new Person("Kubilay", 28, "1234567890");
// person1.showInfos();
// let employee1 = new Employee("Ekrem", 34, "1231231221", 2000);
// employee1.showInfos();
// interface
// interface IDatabase {
//   add();
//   get();
//   delete();
//   update();
// }
// class MySql implements IDatabase {
//   add() {
//     console.log("MySql add");
//   }
//   get() {
//     console.log("MySql get");
//   }
//   delete() {
//     console.log("MySql delete");
//   }
//   update() {
//     console.log("MySql update");
//   }
// }
// class MongoDB implements IDatabase {
//   add() {
//     console.log("MongoDB add");
//   }
//   get() {
//     console.log("MongoDB get");
//   }
//   delete() {
//     console.log("MongoDB delete");
//   }
//   update() {
//     console.log("MongoDB update");
//   }
// }
// function addDatabase(database: IDatabase) {
//   database.add();
// }
// let mysql = new MySql();
// // mysql.add();
// // mysql.get();
// // mysql.delete();
// // mysql.update();
// let mongodb = new MongoDB();
// // mongodb.add();
// // mongodb.get();
// // mongodb.delete();
// // mongodb.update();
// addDatabase(mysql);
// addDatabase(mongodb);
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database get");
    };
    Database.prototype.add = function () {
        console.log("Database get");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("MySql delete");
    };
    MySql.prototype.update = function () {
        console.log("MySql update");
    };
    return MySql;
}(Database));
var MongoDB = /** @class */ (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoDB.prototype["delete"] = function () {
        console.log("MongoDB delete");
    };
    MongoDB.prototype.update = function () {
        console.log("MongoDB update");
    };
    return MongoDB;
}(Database));
function addDatabase(database) {
    database["delete"]();
}
addDatabase(new MySql());
addDatabase(new MongoDB());
