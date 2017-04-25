const { mulPromise, addPromise, divPromise } = require('./addPr');

// 3, 4, 5
function getSquare(a, b, h) {
    return addPromise(a, b)
    .then(ab => mulPromise(ab, h))
    .then(abh => divPromise(abh, 2));
}

const getSquareAsync = async (a, b, h) => { // eslint-disable-line
    try {
        const ab = await addPromise(a, b);
        const abh = await mulPromise(ab, h);
        const square = await divPromise(abh, 2);
        return Promise.resolve(square);
    } catch (err) {
        return Promise.reject(err);
    }
};

getSquareAsync(3, 4, '5')
.then(a => console.log(a))
.catch(err => console.log(err));
