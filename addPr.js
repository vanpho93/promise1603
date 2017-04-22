function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) return reject(new Error('THAM SO PHAI CO KIEU NUMBER'));
            resolve(a + b);
        }, 500);
    });     
}

function mulPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) return reject(new Error('THAM SO PHAI CO KIEU NUMBER'));
            resolve(a * b);
        }, 500);
    });     
}

function divPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) return reject(new Error('THAM SO PHAI CO KIEU NUMBER'));
            if (b === 0) return reject(new Error('CHIA CHO 0'));
            resolve(a / b);
        }, 500);
    });     
}

module.exports = { addPromise, mulPromise, divPromise };
