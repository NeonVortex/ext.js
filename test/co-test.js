const co = require("../co/co");
const fs = require("../fs-async/fs-async");

co(function*(){
    let fileText = yield fs.readFileAsync('README.md');
    console.log(fileText.toString("utf-8"));
});
