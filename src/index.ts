import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import config from './config';

const port: number = Number(process.env.PORT) || config.port;
const app: Application = express();

app.listen(port, () => {
  console.log(`[${port}] server running`);
});
