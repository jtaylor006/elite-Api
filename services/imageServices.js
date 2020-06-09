const AWS = require("aws-sdk");
const bluebird = require("bluebird");

const uploadFile = (buffer, name, type) => {
  AWS.config.setPromisesDependency(bluebird);
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const s3 = new AWS.S3();

  return (buffer, name, type) => {
    const params = {
      ACL: "public-read",
      Body: buffer,
      Bucket: process.env.S3_BUCKET,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`,
    };
    return s3.upload(params).promise();
  };
};

module.exports = { uploadFile };
