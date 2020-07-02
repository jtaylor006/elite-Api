/**
 * @swagger
 * /api/stories:
 *   get:
 *     summary: Retrieve stories
 *     description: Able to retrieve all of the stories
 *     tags:
 *       - Stories
 *     responses:
 *       200:
 *         description: Successfully retrieved stories
 *         content:
 *            application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                           id:
 *                             type: number
 *                             description: Success Message
 *                           title:
 *                               type: string
 *                               description: title of story
 *                           subtitle:
 *                               type: string
 *                               description: subtitle of story
 *                           image:
 *                               type: string
 *                               description: url to image of main story
 *                           body:
 *                               type: string
 *                               description: story content
 *                           category:
 *                               type: string
 *                               description: category of story
 *                           created_by:
 *                               type: number
 *                               description: user id of the author
 *                           date_created:
 *                               type: string
 *                               format: date
 *                               description: day of story created
 *       401:
 *         description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * /api/stories:
 *   post:
 *     summary: Create Stories
 *     description: Able to create a story
 *     requestBody:
 *        description: Request object for creating a story
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 description: object with story properties
 *                 properties:
 *                    title:
 *                      type: string
 *                    subtitle:
 *                      type: string
 *                    image:
 *                      type: string
 *                    body:
 *                      type: string
 *                    category:
 *                      type: string
 *                    created_by:
 *                      type: integer
 *     tags:
 *       - Stories
 *     responses:
 *       200:
 *         description: Successfully retrieved stories
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          default: Successfully created ${title}
 *                      id:
 *                          type: number
 *                          default: 3
 *       401:
 *         description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * paths:
 *   /api/stories/${storyId}:
 *      put:
 *        summary: Edit Stories
 *        description: Able to edit a story
 *        parameters:
 *          - in: path
 *            name: storyId
 *            required: true
 *            description: The Story Id
 *            type: integer
 *        requestBody:
 *           description: Request object for creating a story
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                    type: object
 *                    description: object with story properties
 *                    properties:
 *                       title:
 *                         type: string
 *                       subtitle:
 *                         type: string
 *                       image:
 *                         type: string
 *                       body:
 *                         type: string
 *                       category:
 *                         type: string
 *                       created_by:
 *                         type: integer
 *        tags:
 *          - Stories
 *        responses:
 *          200:
 *            description: Successfully edited the specified story
 *            content:
 *               application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *                             default: Success!
 *                         id:
 *                             type: number
 *                             default: 3
 *          401:
 *            description: Incorrect Authorization
 *
 */

/**
 * @swagger
 * paths:
 *   /api/stories/${storyId}:
 *      delete:
 *        summary: Delete a story
 *        description: Able to delete a story
 *        parameters:
 *          - in: path
 *            name: storyId
 *            required: true
 *            description: The Story Id
 *            type: integer
 *        tags:
 *          - Stories
 *        responses:
 *          200:
 *            description: Successfully deleted the specified story
 *            content:
 *               application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         message:
 *                             type: string
 *                             default: Successfully deleted the story!
 *          401:
 *            description: Incorrect Authorization
 *
 */
