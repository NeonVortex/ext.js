const stdinCallbacks = [];

const getline = (cb) => {

    if(stdinCallbacks.length == 0) {
        process.stdin.addListener('data', function dataListener(chunk){
            if (stdinCallbacks.length > 0 && chunk != null) {
                if(stdinCallbacks.length == 1) {
                    process.stdin.removeListener('data', dataListener);
                    process.stdin.pause();
                }

                stdinCallbacks.shift()(chunk.toString());
            }
        });
    }

    stdinCallbacks.push(cb);

    process.stdin.resume();

};

module.exports = getline;
