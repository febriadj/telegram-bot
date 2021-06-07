"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply("Hi " + ctx.from.first_name + ", selamat datang"));
(function () {
    const forbiddenWord = process.env.FORBIDDEN_WORD.split(", "), strForbiddenWord = forbiddenWord.join("|");
    bot.hears(new RegExp(strForbiddenWord, "gi"), (ctx) => __awaiter(this, void 0, void 0, function* () {
        yield ctx.deleteMessage();
        ctx.reply("@" + ctx.from.username + " terdeteksi menggunakan kata-kata terlarang");
        const index = yield Math.floor(Math.random() * 3);
        const response = [
            "Dilarang berkata kasar",
            "Kasar amat lu",
            "Hindari penggunaan kata-kata kasar"
        ];
        setTimeout(() => ctx.reply(response[index]), 3000);
    }));
})();
bot.on("sticker", ctx => {
    setTimeout(() => ctx.reply("👍"), 1500);
});
(function () {
    const reg = /(?=.*hello|hei|hai|hi|halo)(?=.*ninja).*/im;
    bot.hears(new RegExp(reg), (ctx) => __awaiter(this, void 0, void 0, function* () {
        const response = ["hello", "hei", "hai", "hi", "halo"], index = yield Math.floor(Math.random() * 5);
        setTimeout(() => ctx.reply(response[index]), 1500);
    }));
})();
bot.launch();
console.log("bot telah aktif");
