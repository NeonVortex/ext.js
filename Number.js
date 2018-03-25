if(Number.EPSILON == undefined) {
    Number.EPSILON = 2.220446049250313e-16;
};

Number.prototype.times = function (fn) {
    for (let i = 0; i < this; i++) {
        fn(i, this, this);
    }
};

Number.equals = (left, right) => {
    return Math.abs(left-right) < Number.EPSILON;
};

//(3).times ((i)=>console.log(i));