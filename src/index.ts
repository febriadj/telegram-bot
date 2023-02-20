import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import webhook from './webhook';
import bot from './bot';
import config from './config';

const port: number = Number(process.env.PORT) || config.port;
const app: Application = express();

webhook(app, bot);

app.listen(port, () => {
  console.log(`[${port}] server running`);
});
