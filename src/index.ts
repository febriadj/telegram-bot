import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import bot from "./bot";

bot.launch();