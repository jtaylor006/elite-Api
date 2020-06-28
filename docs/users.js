/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve users
 *     description: Able to retrieve all of the users
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Array of story ids
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  description: Array of ids
 *                  items:
 *                      type: integer
 *                      description: story ids
 *     responses:
 *       200:
 *         description: Successfully retrieved all of the users
 *         content:
 *            application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                           id:
 *                             type: number
 *                             description: User Id
 *                           first_name:
 *                               type: string
 *                               description: First name of the user
 *                           last_name:
 *                               type: string
 *                               description: Last name of the user
 *                           email:
 *                               type: string
 *                               description: Email allotted to the user
 *       401:
 *         description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a user
 *     description: Able to create a user
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Array of story ids
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  description: Object describing the user
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: email of user
 *                      first_name:
 *                          type: string
 *                          description: First name of user
 *                      last_name:
 *                          type: string
 *                          description: Last name of user
 *                      password:
 *                          type: string
 *                          description: Password of user that will be encrypted
 *     responses:
 *       200:
 *         description: Successfully created all of the users
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                        type: string
 *                        description: Success Message
 *                        default: User Created!
 *       401:
 *         description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * paths:
 *   /api/users/${userId}:
 *      put:
 *        summary: Edit Users
 *        description: Able to edit a user
 *        parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            required: true
 *            description: The User Id
 *        requestBody:
 *           description: Request object for creating a story
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                    type: object
 *                    description: object with story properties
 *                    properties:
 *                       email:
 *                         type: string
 *                       first_name:
 *                         type: string
 *                       last_name:
 *                         type: string
 *        tags:
 *          - Users
 *        responses:
 *          200:
 *            description: Successfully edited the specified user
 *            content:
 *               application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *                             default: Success!
 *          401:
 *            description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * paths:
 *   /api/users/${userId}:
 *      delete:
 *        summary: Delete a user
 *        description: Able to delete a user
 *        parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            required: true
 *            description: The user Id
 *        tags:
 *          - Users
 *        responses:
 *          200:
 *            description: Successfully deleted the specified user
 *            content:
 *               application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *                             default: Successfully deleted the user!
 *          401:
 *            description: Incorrect Authorization
 *
 */