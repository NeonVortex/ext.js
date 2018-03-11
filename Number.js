Number.prototype.times = function (fn) {
    for (let i = 0; i < this; i++) {
        fn(i, this, this);
    }
};

//(3).times ((i)=>console.log(i));