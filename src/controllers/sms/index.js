var AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });
var credentials = new AWS.SharedIniFileCredentials({
  profile: process.env.AWS_ENV_PROFILE
});
AWS.config.credentials = credentials;
//console.log("credentials ", credentials);
const log = require("src/helpers/logger");

const postSMS = async (req, res) => {
  try {
    log.info(req.headers);
    const { body } = req;
    // Create publish parameters
    var params = {
      Message: body.message,
      PhoneNumber: body.phoneNumber,
      MessageAttributes: {
        "AWS.SNS.SMS.SenderID": {
          DataType: "String",
          StringValue: body.subject
        }
      }
    };
    console.log("params ", params);
    const smsApi = new AWS.SNS({ apiVersion: "2010-03-31" });
    // Create promise and SNS service object

    const response = await smsApi.publish(params).promise();
    console.log("MessageID is " + response.MessageId);
    res.status(200).json({ codRes: 200, id: response.MessageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ codRes: 99 });
  }
};

const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
  postSMS
};
