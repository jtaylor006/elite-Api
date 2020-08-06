const Router = require("express-promise-router");
const router = new Router();
const multer = require("multer");
const images_api = require("../api/images");
const authCheck = require("../config/middleware/authCheck");

router.post(
  "/",
  multer({ dest: "temp/", limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    "image"
  ),
  images_api.uploadImage
);

router.post("/sign", authCheck, images_api.sign_s3);

module.exports = router;
