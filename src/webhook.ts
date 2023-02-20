import { Application } from 'express';
import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import config from './config';

type TWebhook = (
  app: Application,
  bot: Telegraf<Context<Update>>
) => Promise<void>;

const webhook: TWebhook = async (app, bot) => {
  try {
    if (config.isProd) {
      const url: string | undefined = process.env.WEBHOOK_URL;

      // webhook url is required.
      if (!url) {
        throw new Error('invalid webhook url');
      }

      app.use(await bot.createWebhook({ domain: url }));
    } else {
      bot.launch();
    }
  } catch (err) {
    console.error(err);

    // terminate the process.
    process.exit(1);
  }
};

export default webhook;
