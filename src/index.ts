import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import * as express from "express";
import bot from "./bot";

const app = express();
const port = process.env.PORT || 3000;

bot.telegram.setWebhook(`https://ninjadigitalbot.herokuapp.com/bot${process.env.BOT_TOKEN}`);

app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`));
app.get('/', (req, res) => res.send('hello world'));

bot.launch(); 

app.listen(3000);
console.log(`[${port}] server listening`);