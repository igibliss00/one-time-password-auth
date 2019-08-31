const twilio = require('twilio')

const accountSid = 'ACaa60d4712fb527953b1d58c6a9e1bdc4'
const authToken = 'ae697e9c10f59d7412bd204182134fc4'

module.exports = new twilio.Twilio(accountSid, authToken)