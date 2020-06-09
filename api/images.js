const fs = require("fs");
const AWS = require("aws-sdk");

exports.uploadImage = (req, res, next) => {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3();
    const params = {
      ACL: "public-read",
      Bucket: process.env.S3_BUCKET,
      Body: fs.createReadStream(req.file.path),
      Key: `image/${req.file.originalname}`,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error occured while trying to upload to S3 bucket", err);
      }

      if (data) {
        fs.unlinkSync(req.file.path);
        return res.status(200).send({ data });
      }
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
