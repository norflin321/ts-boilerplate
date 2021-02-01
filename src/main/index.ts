import express from 'express';

import {round} from '../utils/funcs';

const app = express();
app.use(express.json());
app.get('/ping', (_, res) => {
  console.log('ping-pong');
  res.json('pong');
});

const magic = () => {
  console.log(round(10.126));
};
magic();

app.listen(process.env.PORT || 5000);
