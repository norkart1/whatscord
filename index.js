const { Client, GatewayIntentBits } = require("discord.js");
const twilio = require("twilio");
const config = require("./config");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const twilioClient = new twilio(config.twilioAccountSid, config.twilioAuthToken);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith("!whatsapp")) {
        const text = message.content.replace("!whatsapp", "").trim();
        if (!text) {
            message.reply("Please provide a message to send to WhatsApp.");
            return;
        }

        try {
            await twilioClient.messages.create({
                from: config.twilioWhatsAppNumber,
                to: config.receiverWhatsAppNumber,
                body: text,
            });

            message.reply("Message sent to WhatsApp!");
        } catch (error) {
            console.error(error);
            message.reply("Failed to send message.");
        }
    }
});

client.login(config.discordToken);
