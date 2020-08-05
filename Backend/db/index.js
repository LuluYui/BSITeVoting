const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit: 100,
    host: "119.63.98.53",
    port: "3307",
    user: "voter",
    password: "vote",
    database: "voting",
});

let eVoteDatabase = {};

eVoteDatabase.all = () => {
    return new Promise((resolve, reject) => {
        connection.query(`Select * from VOTE_USER_INFO WHERE USER_ID = 'USER0001';`, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

eVoteDatabase.qrcode = (qr_code) => {
    return new Promise((resolve, reject) => {
        connection.query(`Select * from VOTE_USER_INFO WHERE QR_CODE = ?;`, [qr_code], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};



module.exports = eVoteDatabase;
