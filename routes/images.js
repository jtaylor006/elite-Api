const Router = require("express-promise-router");
const router = new Router();
const multer = require("multer");
const images_api = require("../api/images");

router.post(
  "/",
  multer({ dest: "temp/", limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    "image"
  ),
  images_api.uploadImage
);

module.exports = router;
