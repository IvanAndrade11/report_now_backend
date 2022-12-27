import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import './bd.js';

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

import './utils/auth/index.js';
import passport from 'passport';
app.use(passport.initialize());

import routerApi from './routes/index.js';
routerApi(app);

app.listen(PORT);
console.log(`RUN SERVER IN PORT ${PORT}`);
