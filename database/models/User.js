const {
    pool
} = require('./../connection');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

const result = (res) => {
    if(res.length > 0){
        return {
            status: 1,
            data: res
        }
    }else{
        return {
            status: 0,
            data: []
        }
    }
    return res;
}

const userQueries = {
    test: async (id) => {
        try {
            const queryResult = await query(`SELECT * FROM USERS WHERE ID=?`, [id]);
            return result(queryResult);
        } catch (error) {
            throw error
        }
    }
}

module.exports = userQueries;