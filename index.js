// a, b, h => (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') 
        return cb(new Error('THAM SO PHAI CO KIEU NUMBER'));
        cb(undefined, a + b);
    }, 500);
};

add(4, 5, (err, result) => {
    if (err) return console.log(err + '');
    console.log('RESULT', result);
});
