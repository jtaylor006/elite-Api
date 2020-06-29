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
        throw new Error(err);
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

exports.sign_s3 = (req, res, next) => {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    const s3 = new AWS.S3();
    const { fileName, fileType } = req.body;

    const s3Params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
      Expires: 500,
      ContentType: fileType,
      ACL: "public-read",
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        throw new Error(err);
      }

      const response = {
        signedRequest: data,
        url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      return res.status(200).send(response);
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
