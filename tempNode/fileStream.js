var fs = require("fs");

// utf8 or data.toString()
// read
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// write
fs.writeFile("file2.txt", "testName3", function (err, data) {
  if (err) {
    throw err;
  }
  console.log("Completed !!");
});
// added
fs.appendFile("file2.txt", "testName1", function (err, data) {
  if (err) {
    throw err;
  }
  console.log("Added !!");
});
// deleted
fs.unlink("file2.txt", function (err) {
  if (err) {
    throw err;
  }
  console.log("Deleted !!");
});
