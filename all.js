const { addPromise } = require('./addPr');

const add = addPromise;

Promise.race([add('1', 2), add(2, 3), add(3, '4')])
.then(a => console.log(a))
.catch(err => console.log(err));
