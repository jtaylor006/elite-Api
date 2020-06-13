const Router = require('express-promise-router')
const router = new Router();
const usersApi = require('../api/users')

/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/', usersApi.getUsers)

router.post('/', usersApi.createUsers)

router.put('/:userId', usersApi.editUser)

router.delete('/:id', usersApi.deleteUser)

module.exports = router