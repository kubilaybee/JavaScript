// let a: string;
// let b: number;
// let c: boolean;
// let d: any; //dinamik
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log("MySql add");
    };
    MySql.prototype.get = function () {
        console.log("MySql get");
    };
    MySql.prototype["delete"] = function () {
        console.log("MySql delete");
    };
    MySql.prototype.update = function () {
        console.log("MySql update");
    };
    return MySql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function () {
        console.log("MongoDB add");
    };
    MongoDB.prototype.get = function () {
        console.log("MongoDB get");
    };
    MongoDB.prototype["delete"] = function () {
        console.log("MongoDB delete");
    };
    MongoDB.prototype.update = function () {
        console.log("MongoDB update");
    };
    return MongoDB;
}());
function addDatabase(database) {
    database.add();
}
var mysql = new MySql();
// mysql.add();
// mysql.get();
// mysql.delete();
// mysql.update();
var mongodb = new MongoDB();
// mongodb.add();
// mongodb.get();
// mongodb.delete();
// mongodb.update();
addDatabase(mysql);
addDatabase(mongodb);
