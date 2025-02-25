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

