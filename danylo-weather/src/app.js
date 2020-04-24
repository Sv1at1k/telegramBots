require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {
    polling: true
});


bot.onText(/\/погода/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];

    bot.sendMessage(
        chatId,
        'Погода!',
    );
 });