const credentials = require('./credentials')
const mysql = require('mysql')

const pool = mysql.createPool(credentials, (err) => {
    if (err) {
        console.log(`[DATABASE]: Error trying to connect to the database.`)
        console.log(err)
        connectDB();
    } else {
        var date = new Date();
        console.log(`[DATABASE]: Connected to the database. ` + date.toLocaleString());
    }
})

let connectDB = () => {
    setTimeout(() => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(`[DATABASE]: Error trying to connect to the database.`)
                console.log(err)
                connectDB();
            } else {
                var date = new Date();
                console.log(`[DATABASE]: Connected to the database. ` + date.toLocaleString());
            }
        })
    }, 2000)
}

module.exports = {
    pool,
    mysql
}