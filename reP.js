Promise.reject(100)
.then(
    a => console.log(a), 
    err => console.log(err)
)
.then(err => console.log(err));
