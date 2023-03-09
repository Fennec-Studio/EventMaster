const express = require('express')
const router = express.Router()
const db = require('../../database/controller')
router.use(express.json());


router.post('/api/users/auth/validate', async (req, res) => {
    try {
        const result = await db.User.test(0);
    } catch (error) {
        throw error;
    }
})

module.exports = router