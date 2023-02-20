import { Telegraf, Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

type TTelegraf = () => Telegraf<Context<Update>>;

/**
 * Telegraf bot launcher.
 * @returns {Telegraf.<Context.<Update>>}
 */
const telegraf: TTelegraf = () => {
  try {
    const token: string | undefined = process.env.BOT_TOKEN;

    // bot token is required.
    if (!token) {
      throw new Error('invalid bot token');
    }

    return new Telegraf(token);
  } catch (err) {
    console.error(err);

    // terminate the process.
    process.exit(1);
  }
};

export default telegraf;
