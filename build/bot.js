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
const speed = [
    1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000,
    6500, 7000, 7500, 8000, 8500
];
const inSpeed = Math.floor(Math.random() * speed.length);
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply("Hi " + ctx.from.first_name + ", selamat datang"));
(function () {
    const forbWord = process.env.FORBIDDEN_WORD.split(", "), strForbWord = forbWord.join("|");
    bot.hears(new RegExp(strForbWord, "gi"), (ctx) => __awaiter(this, void 0, void 0, function* () {
        yield ctx.deleteMessage();
        ctx.reply("@" + ctx.from.username + " terdeteksi menggunakan kata-kata terlarang");
        const res = [
            "Hindari penggunaan kata-kata kasar",
            "Kasar amat lu",
            "Dilarang berkata kasar"
        ];
        const index = yield Math.floor(Math.random() * res.length);
        setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
    }));
})();
(function () {
    const reg = /(?=.*hello|hei|hai|hi|halo)(?=.*ninja).*/im;
    bot.hears(new RegExp(reg), (ctx) => __awaiter(this, void 0, void 0, function* () {
        const res = [
            "Hi " + ctx.from.first_name,
            "Hello", "Hei",
            "Hai", "Hi", "Halo"
        ], index = yield Math.floor(Math.random() * res.length);
        setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
    }));
})();
(function () {
    const reg = /(?=.*?)(?=.*ninja)(?=.*sedang apa|.*lagi [apa|ngapain]).*/im;
    bot.hears(new RegExp(reg), (ctx) => __awaiter(this, void 0, void 0, function* () {
        const res = [
            "Lagi rebahan aja nih dikamar",
            "Lagi godain cewek",
            "Lagi nugas nih, puyeng gk kelar-kelar"
        ], index = yield Math.floor(Math.random() * res.length);
        setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
        setTimeout(() => {
            index === 1 ? ctx.reply("Mau cewek gk lu? @" + ctx.from.username) : null;
        }, speed[inSpeed] + speed[inSpeed]);
    }));
})();
// trigger
bot.on("new_chat_members", ctx => {
    setTimeout(() => {
        ctx.reply(`Hi ${ctx.from.first_name}, selamat datang di grup. Saya ninja, salam kenal ya...`);
    }, speed[inSpeed]);
});
bot.on("left_chat_member", ctx => {
    const ifTrue = Math.floor(Math.random() * 8);
    ifTrue === 2
        ? setTimeout(() => ctx.reply("Siapa tuh yang keluar"), speed[inSpeed])
        : null;
});
bot.on("sticker", ctx => {
    setTimeout(() => ctx.reply("👍"), speed[inSpeed]);
});
exports.default = bot;
