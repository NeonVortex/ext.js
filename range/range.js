//Class
function RangeType(){}

RangeType.prototype.forEach = function (func) {
    for(let i = this.start; i<=this.end; i+=this.step) {
        func(i);
    }
}

RangeType.prototype.forEach = function (func) {
    for(let i = this.start; i<=this.end; i+=this.step) {
        func(i);
    }
}

//Factory
function Range (start, end, step = 1) {
    return Object.assign(new RangeType(), {start: start, end: end, step: step});
}


module.exports = Range;

//Range(1,4).forEach((i)=>console.log(i));
//Range(1,11,3).forEach((i)=>console.log(i));