require('dotenv').config();
const { PORT = 8080 } = process.env;
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cookies from 'cookie-parser';
import router from './server/router';
const app = express();
process.env.PRODUCTION && app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(cookies());
app.use(router);
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
