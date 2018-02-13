const co = function (genFunc) {
    const genObj = genFunc();
    const run = function (){
        const genResult = genObj.next();
        if(!genResult.done) {
            const genResultValue = genResult.value;
            genResultValue.then(
                it=>genObj.next(it)
            );
        }
    };

    run();
}

module.exports = co;
module.exports.co = co;

