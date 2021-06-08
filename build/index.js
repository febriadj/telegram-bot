"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const bot_1 = require("./bot");
bot_1.default.launch();
console.log("bot telah aktif");
