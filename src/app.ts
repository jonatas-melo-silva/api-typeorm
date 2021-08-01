import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerWithDataBase } from './config/dataBase';
import routerUser from './routes/user';
import routerLaunch from './routes/launch';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

connectServerWithDataBase();

app.use('/users', routerUser);
app.use('/launches', routerLaunch);
app.use('/', (request ,response) => {
  response.send('API App Jonatas')
})

export default app;
