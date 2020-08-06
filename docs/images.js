/**
 * @swagger
 * /api/images:
 *   post:
 *     summary: Upload images to elite s3 bucket
 *     description: Upload image to s3 bucket
 *     requestBody:
 *       required: true
 *       content:
 *          image/png:
 *              schema:
 *                  type: string
 *                  format: binary
 *     tags:
 *       - Images
 *     responses:
 *       200:
 *         description: Successfully uploaded image
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  description: Object describing the uploaded image
 *                  properties:
 *                      data:
 *                          type: object
 *                          description: Object returned by aws sdk describing the image
 *                          properties:
 *                              ETag:
 *                                  type: string
 *                                  description: Tag of uploaded image
 *                              Location:
 *                                  type: string
 *                                  description: URL of uploaded image
 *                              key:
 *                                  type: string
 *                                  description: Key of image
 *                              Key:
 *                                  type: string
 *                                  description: Key of image
 *                              Bucket:
 *                                  type: string
 *                                  description: Name of aws bucket the image was uploaded to
 *       401:
 *         description: Incorrect Authorization
 *
 */