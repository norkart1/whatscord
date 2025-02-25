# WhatsCord - A Discord Bot to Send Messages to WhatsApp

WhatsCord is a Node.js-based Discord bot that allows you to send WhatsApp messages using the Twilio API. This bot listens for specific commands in Discord and forwards messages to WhatsApp.

## 🚀 Features
- Send messages from Discord to WhatsApp.
- Uses Twilio's API for WhatsApp messaging.
- Easy to set up and configure.

## 📌 Requirements
Before running this bot, ensure you have the following:
- Node.js (v16 or later)
- A Twilio account with a **WhatsApp-enabled Twilio number**
- A Discord bot token
- Twilio Account SID & Auth Token

## 📂 File Structure
```
whatscord/
├── node_modules/        # Installed dependencies
├── .env                 # Environment variables (Twilio & Discord credentials)
├── index.js             # Main bot logic
├── sendMessage.js       # Twilio WhatsApp messaging logic
├── package.json         # Dependencies & project info
├── README.md            # Documentation
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/norkart1/whatscord.git
cd whatscord
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root folder and add:
```ini
# Twilio Credentials
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+your_twilio_number
RECEIVER_WHATSAPP_NUMBER=whatsapp:+receiver_number

# Discord Bot Token
DISCORD_BOT_TOKEN=your_discord_bot_token
```
Find your **Twilio credentials** in the [Twilio Console](https://www.twilio.com/console).  
Ensure your **receiver number** is in **international format** (e.g., `whatsapp:+917902720609`).

### 4️⃣ Run the Bot
```sh
node index.js
```
If you're using `nodemon`:
```sh
nodemon index.js
```

## 🎮 Usage
- Invite the bot to your Discord server.
- Use a command (e.g., `!whatsapp Hello!`) to send a message to WhatsApp.
- The bot will forward the message via Twilio.

## 🛠️ Troubleshooting
**1. Not Receiving Messages?**
- Ensure your Twilio number is **WhatsApp-approved** ([Check Here](https://www.twilio.com/console/sms/whatsapp)).
- If using Twilio Sandbox, **join using the code** by sending:
  ```
  join <sandbox-code>
  ```
  to `+1 415 523 8886` on WhatsApp.

**2. Check Twilio Logs**
- Go to [Twilio Logs](https://www.twilio.com/console/monitor/logs) for error details.

**3. Verify Environment Variables**
- Ensure your `.env` file is properly configured.
- Restart the bot after changes: `rs` (if using nodemon) or `node index.js`.

## 📜 License
This project is open-source under the MIT License.

## 🙌 Contributions
Feel free to fork, submit issues, or contribute to the project!

---
💬 **Need Help?** Reach out via GitHub Issues! 🚀





# WhatsCord - A Discord Bot to Send Messages to WhatsApp

## Abstract

Communication platforms have evolved significantly, integrating various messaging services to enhance connectivity. This research presents WhatsCord, a Node.js-based Discord bot that facilitates real-time messaging from Discord to WhatsApp using Twilio's API. The objective is to provide an efficient and seamless method of bridging two widely used communication platforms. The implementation, architecture, challenges, and future enhancements are explored in this paper.

## Introduction

In the era of instant messaging, platforms such as Discord and WhatsApp have gained significant traction. While Discord is predominantly used for community discussions, gaming, and collaboration, WhatsApp serves as a more personal and widely used messaging application. Integrating these platforms allows users to communicate efficiently across different channels. WhatsCord aims to address this need by enabling automated message forwarding from Discord to WhatsApp using the Twilio API.

![Discord Logo](https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg)

![WhatsApp Logo](https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg)

## System Architecture

The WhatsCord system consists of three main components:
- **Discord Bot**: Listens to messages in a designated Discord channel and triggers an event when a specific command is detected.
- **Twilio API**: Responsible for sending messages to WhatsApp once triggered by the Discord bot.
- **Node.js Server**: Acts as a bridge between Discord and Twilio, handling authentication and message processing.

The system flow begins when a user sends a command (e.g., `!whatsapp Hello!`) in Discord. The bot captures the message, processes it, and forwards it to Twilio, which then delivers it to a specified WhatsApp number.

![Twilio API](https://www.twilio.com/marketing/bundles/company-brand/img/logos/red/twilio-logo-red.png)

## Implementation

### 1. Environment Setup
To build WhatsCord, the following dependencies are required:
- Node.js for server-side execution
- Twilio SDK for WhatsApp messaging
- Discord.js for Discord bot integration
- dotenv for managing environment variables

### 2. Configuration and Credentials
Before running the bot, credentials must be configured in a `.env` file, including:
- Twilio Account SID & Auth Token
- Twilio WhatsApp Number
- Discord Bot Token

### 3. Message Processing
The bot listens for commands in Discord and extracts the message content. This content is then formatted and sent via Twilio’s API to the designated WhatsApp number.

## Challenges and Solutions

**1. Twilio Sandbox Limitations**: Twilio requires sandbox approval for WhatsApp messaging. To mitigate this, users need to join the Twilio sandbox manually before messages can be delivered.

**2. Message Formatting Issues**: Some special characters and formatting are not directly supported. This was handled by applying encoding and formatting functions before sending messages.

**3. Rate Limits on Messaging**: Twilio enforces rate limits on free-tier accounts. The solution involves optimizing message dispatch and implementing retries.

## Use Cases

- **Business Notifications**: Automating Discord messages to WhatsApp for business updates.
- **Community Management**: Moderators can send alerts from Discord directly to WhatsApp groups.
- **Gaming Coordination**: Teams can share real-time game updates across platforms.

## Future Enhancements

Several improvements can be integrated to enhance WhatsCord:
1. **Multi-User Support**: Allowing multiple users to register WhatsApp numbers.
2. **Message Logging**: Implementing a database to track and log sent messages.
3. **Two-Way Communication**: Enabling replies from WhatsApp to be posted in Discord.
4. **Webhook Integration**: Using webhooks for real-time notifications.

## Conclusion

WhatsCord successfully bridges the communication gap between Discord and WhatsApp by leveraging the Twilio API. It provides a simple yet effective solution for users seeking seamless cross-platform messaging. While the current implementation is functional, future enhancements will further improve its scalability and usability.

---
💬 **Need Help?** Reach out via GitHub Issues! 🚀



