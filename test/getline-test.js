const getline = require(__dirname + "/../getline");

getline((line)=>{
    console.log("first", line);
    getline((line)=>console.log("second", line));
    getline((line)=>console.log("third", line));
    setTimeout(()=>getline(line=>console.log("timed", line)), 5000);
});