const aws = require("aws-sdk");
const ses = new aws.SES({ region: "eu-west-2" });

exports.handler = async (event) => {
  let data = "Test";

  event.Records.forEach((record) => {
    const { body } = record;
    data = body;
  });

  const emailParams = {
    Destination: {
      ToAddresses: ["mike@wyss.co.uk"],
    },
    Message: {
      Body: {
        Text: { Data: data },
      },
      Subject: { Data: "Test Email" },
    },
    Source: "mike@wyss.co.uk",
  };

  return ses.sendEmail(emailParams).promise();
};
