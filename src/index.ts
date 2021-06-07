import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Hi " + ctx.from.first_name + ", selamat datang"));

(function(): void {
  const 
    forbiddenWord: Array<string> = process.env.FORBIDDEN_WORD.split(", "),
    strForbiddenWord: string = forbiddenWord.join("|");

  bot.hears(new RegExp(strForbiddenWord, "gi"), async (ctx): Promise<void> => {
    await ctx.deleteMessage();
  
    ctx.reply("@" + ctx.from.username + " terdeteksi menggunakan kata-kata terlarang");
  
    const index: number = await Math.floor(Math.random() * 3); 
    const response: Array<string> = [
      "Dilarang berkata kasar",
      "Kasar amat lu", 
      "Hindari penggunaan kata-kata kasar"
    ];
  
    setTimeout(() => ctx.reply(response[index]), 3000);
  })
})();

bot.on("sticker", ctx => {
  setTimeout(() => ctx.reply("👍"), 1500);
});

(function(): void {
  const reg: RegExp = /(?=.*hello|hei|hai|hi|halo)(?=.*ninja).*/im;

  bot.hears(new RegExp(reg), async (ctx): Promise<void> => {
    const 
      response: Array<string> = ["hello", "hei", "hai", "hi", "halo"]
    , index: number = await Math.floor(Math.random() * 5);
  
    setTimeout(() => ctx.reply(response[index]), 1500);
  });
})();

bot.launch(); 
console.log("bot telah aktif");