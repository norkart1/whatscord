require("dotenv").config();

module.exports = {
    discordToken: process.env.DISCORD_TOKEN,
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    twilioWhatsAppNumber: process.env.TWILIO_WHATSAPP_NUMBER,
    receiverWhatsAppNumber: process.env.RECEIVER_WHATSAPP_NUMBER,
};
