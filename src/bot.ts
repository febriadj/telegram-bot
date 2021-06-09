import { Telegraf } from "telegraf";

const speed = [
  1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 
  6500, 7000, 7500, 8000, 8500
];

const inSpeed = Math.floor(Math.random() * speed.length);
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Hi " + ctx.from.first_name + ", selamat datang"));

(function(): void {
  const 
    forbWord: Array<string> = process.env.FORBIDDEN_WORD.split(", "),
    strForbWord: string = forbWord.join("|");

  bot.hears(new RegExp(strForbWord, "gi"), async (ctx): Promise<void> => {
    await ctx.deleteMessage();
  
    ctx.reply("@" + ctx.from.username + " terdeteksi menggunakan kata-kata terlarang");
  
    const res: Array<string> = [
      "Hindari penggunaan kata-kata kasar", 
      "Kasar amat lu", 
      "Dilarang berkata kasar"
    ];

    const index: number = await Math.floor(Math.random() * res.length);
    setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
  })
})();

(function(): void {
  const reg: RegExp = /(?=.*hello|hei|hai|hi|halo)(?=.*ninja).*/im;

  bot.hears(new RegExp(reg), async (ctx): Promise<void> => {
    const 
      res: Array<string> = [
        "Hi " + ctx.from.first_name, 
        "Hello", "Hei", 
        "Hai", "Hi", "Halo"
      ]
    , index: number = await Math.floor(Math.random() * res.length);
  
    setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
  });
})();

(function(): void {
  const reg: RegExp = /(?=.*?)(?=.*ninja)(?=.*sedang apa|.*lagi [apa|ngapain]).*/im;
  
  bot.hears(new RegExp(reg), async (ctx): Promise<void> => {
    const
      res: Array<string> = [
        "Lagi rebahan aja nih dikamar", 
        "Lagi godain cewek", 
        "Lagi nugas nih, puyeng gk kelar-kelar"
      ]
    , index: number = await Math.floor(Math.random() * res.length);

    setTimeout(() => ctx.reply(res[index]), speed[inSpeed]);
    setTimeout(() => {
      index === 1 ? ctx.reply("Mau cewek gk lu? @" + ctx.from.username) : null;
    }, speed[inSpeed] + speed[inSpeed]);
  })
})();

// trigger
bot.on("new_chat_members", ctx => {
  setTimeout(() => {
    ctx.reply(`Hi ${ctx.from.first_name}, selamat datang di grup. Saya ninja, salam kenal ya...`);
  }, speed[inSpeed]);
})

bot.on("left_chat_member", ctx => {
  const ifTrue = Math.floor(Math.random() * 8);
  
  ifTrue === 2 
    ? setTimeout(() => ctx.reply("Siapa tuh yang keluar"), speed[inSpeed])
    : null;
})

bot.on("sticker", ctx => {
  setTimeout(() => ctx.reply("👍"), speed[inSpeed]);
})

export default bot;