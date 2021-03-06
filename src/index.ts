import express from 'express';
import routes from './router';
import 'reflect-metadata';
import './database/connect';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.info('Server started at http://localhost:3000')
});