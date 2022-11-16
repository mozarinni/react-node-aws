const AWS = require("aws-sdk");
const res = require("express/lib/response");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.register = (req, res) => {
  // console.log("REGISTER CONTROLLER", req.body);
  const { name, email, password } = req.body;

  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_TO],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hello ${name}</h1><p>Test mail</p></body></html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete your registration",
      },
    },
  };

  const sendEmailOnRegister = ses.sendEmail(params).promise();

  sendEmailOnRegister
    .then((data) => {
      console.log("email submitted to SES", data);
      res.send("email sent");
    })
    .catch((err) => {
      console.log("SES email on register", err);
      res.send("email failed");
    });
};
