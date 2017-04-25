const squareNumber = (i) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof i !== 'number') return reject(new Error('LOI DINH DANG'));
            resolve(i * i);
        }, 2000);
    })
);

const arr = [1, 3, 5, 8, 4, 2, 10];

// squareNumber(arr[0])
// .then(kq => console.log(kq))
// .then(() => squareNumber(arr[1]))
// .then(kq => console.log(kq))
// .then(() => squareNumber(arr[2]))
// .then(kq => console.log(kq))
// .then(() => squareNumber(arr[3]));

// function get(i) {
//     return squareNumber(arr[i])
//     .then(() => get(i + 1));
// } 
// get(0).catch(err => console.log('HET'));


// arr.forEach(e => squareNumber(e).then(sq => console.log(sq)));
const getAll = async () => {
    for (let i = 0; i < arr.length; i++) {
        try {
            const kq = await squareNumber(arr[i] + '');
            console.log(kq);
        } catch (err) {
            console.log(err.toString());
        }
    }
};

getAll();

// const getAllEach = async () => {
//     arr.forEach(async e => {
//         const kq = await squareNumber(e);
//         console.log(kq);
//     });
// };

// getAllEach();
