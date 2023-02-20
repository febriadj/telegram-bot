import telegraf from './utils/telegraf.util';

const bot = telegraf();

// listens for '/start' command.
bot.start((ctx) => {
  ctx.reply(`@${ctx.botInfo.username} started`);
});

export default bot;
