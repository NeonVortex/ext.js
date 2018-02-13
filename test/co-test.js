const co = require(__dirname + "/../co/co");
const fs = require(__dirname + "/../fs-async/fs-async");

co(function*(){
    let fileText = yield fs.readFileAsync(__dirname + '/co-test.js');
    console.log(fileText.toString("utf-8"));
});
