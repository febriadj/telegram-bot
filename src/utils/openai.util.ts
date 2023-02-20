import { OpenAIApi, Configuration } from 'openai';

/**
 * OpenAI API (ChatGPT) launcher.
 * @returns {OpenAIApi}
 */
const openai = (): OpenAIApi => {
  try {
    const token: string | undefined = process.env.OPENAI_API_KEY;

    // openai key is required.
    if (!token) {
      throw new Error('invalid OpenAI API key');
    }

    const apiConfig: Configuration = new Configuration({ apiKey: token });

    return new OpenAIApi(apiConfig);
  } catch (err) {
    console.error(err);

    // terminate the process.
    process.exit(1);
  }
};

export default openai;
