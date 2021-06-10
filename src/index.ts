import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import bot from "./bot";
import express, { Request, Response } from "express";

bot.telegram.setWebhook(`https://ninjadigitalbot.herokuapp.com/secret`);

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => res.send('Ninja Digital Bot'));
app.use(bot.webhookCallback(`/secret`));

bot.launch();

app.listen(port);
console.log("server listening on port " + port);