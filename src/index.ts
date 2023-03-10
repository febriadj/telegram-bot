import dotenv from 'dotenv';

dotenv.config();

import express, { Application, Request, Response } from 'express';
import webhook from './webhook';
import bot from './bot';
import config from './config';

const port: number = Number(process.env.PORT) || config.port;
const app: Application = express();

webhook(app, bot);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'express router works',
  });
});

app.listen(port, () => {
  console.log(`[${port}] server running`);
});
