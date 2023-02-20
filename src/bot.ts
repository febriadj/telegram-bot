import { message } from 'telegraf/filters';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
import telegraf from './utils/telegraf.util';
import openai from './utils/openai.util';

const bot = telegraf();
const ai = openai();

// listens for '/start' command.
bot.start((ctx) => {
  ctx.reply(`@${ctx.botInfo.username} started`);
});

// listens for text messages.
bot.on(message('text'), async (ctx): Promise<void> => {
  const isPrivate: boolean = ctx.message.chat.type === 'private';
  const extra: ExtraReplyMessage = {};

  if (!isPrivate) {
    // reply to specific messages.
    extra.reply_to_message_id = ctx.message.message_id;
  }

  try {
    const completion = await ai.createCompletion({
      prompt: ctx.message.text,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'text-davinci-003',
      stop: '<|im_end|>',
    });

    const text: string = completion.data.choices[0].text ?? '';
    ctx.reply(text, extra);
  } catch (err) {
    ctx.reply('request failed', extra);
  }
});

export default bot;
