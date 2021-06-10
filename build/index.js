"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
const bot_1 = __importDefault(require("./bot"));
const express_1 = __importDefault(require("express"));
bot_1.default.telegram.setWebhook(`https://ninjadigitalbot.herokuapp.com/secret`);
const app = express_1.default();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Ninja Digital Bot'));
app.use(bot_1.default.webhookCallback(`/secret`));
bot_1.default.launch();
app.listen(port);
console.log("server listening on port " + port);
