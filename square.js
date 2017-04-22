const { mul, add, div } = require('./index');

const getSquare = (a, b, h, cb) => {
    add(a, b, (err, ab) => {
        if (err) return cb(err);
        mul(ab, h, (err2, abh) => {
            if (err2) return cb(err2);
            div(abh, 2, (err3, square) => {
                if (err3) return cb(err3);
                cb(undefined, square);
            });
        });
    });
};

getSquare(3, 4, 5, (err, result) => {
    if (err) return console.log(err.toString());
    console.log('KET QUA: ', result);
});
