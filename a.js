const pg = require('pg');
const fs = require('fs');

const config = {
    host: 'localhost',
    port: 5432,
    password: 'khoapham',
    user: 'postgres',
    database: 'NODE1603',
    max: 10
};

const pool = new pg.Pool(config);

function query(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

// query('SELECT * FROM "User"', [])
// .then(result => result.rows[0].abc.a)
// .then(param => console.log('PARAM', param))
// .catch(err => 113)
// .then(a => console.log('a = ', a));

const writePromise = (filename, data) => (
    new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', err => {
            if (err) return reject(err);
            resolve();
        });
    })
);
// writePromise('data.txt', 'XIn chao Cac BAN')
// .then(() => console.log('THANH_CONG'))
// .catch(err => console.log('THAT_BAT', err));
// function queryAndSave(sql, arrData, file) {
// }
const queryAndSave = (sql, arrayData, file) => (
    query(sql, arrayData)
    .then(result => writePromise(file, JSON.stringify(result.rows)))
);

queryAndSave('SELECT * FROM "User"', [], 'data.txt')
.then(() => console.log('THANH_CONG'))
.catch(err => console.log(err));
