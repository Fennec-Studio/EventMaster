var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session)

const sesionesConfig = {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'MyEvent',

    clearExpired: true,
	checkExpirationInterval: 1500000,
	expiration: 3600000,
	createDatabaseTable: true,
	connectionLimit: 1,
	endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
	schema: {
		tableName: 'SESSIONS',
		columnNames: {
			session_id: 'SESSION_ID',
			expires: 'EXP_DATE',
			data: 'DATA'
		}
	}
}

var sessionStore = new MySQLStore(sesionesConfig)

module.exports = session({
    key: 'MyEvent',
    secret: 'nVcDxM9kqU9uJvaOXyvuBWyPV0ao8Ofe',
    saveUninitialized: false,
    resave: false,
    store: sessionStore
})