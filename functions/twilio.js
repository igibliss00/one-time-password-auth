const twilio = require('twilio')

const accountSid = YOUR_SID
const authToken = YOUR_TOKEN

module.exports = new twilio.Twilio(accountSid, authToken)
