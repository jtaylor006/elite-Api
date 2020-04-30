const Router = require('express-promise-router')
const router = new Router();
const usersApi = require('../api/users')

router.get('/', usersApi.getUsers)

router.post('/', usersApi.createUsers)

router.put('/:userId', usersApi.editUser)

module.exports = router