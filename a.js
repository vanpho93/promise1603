const pg = require('pg');

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

query('SELECT * FROM "User"', [])
.then(result => console.log(result.rows))
.catch(err => console.log(err));
