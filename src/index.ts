import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import * as express from "express";
import bot from "./bot";

bot.telegram.setWebhook(`https://ninjadigitalbot.herokuapp.com/bot${process.env.BOT_TOKEN}`);

const app = express();
const port = process.env.PORT || 3000;

app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`));

bot.launch(); 
console.log("bot telah aktif");

app.listen(3000);
console.log(`[${port}] server listening`);