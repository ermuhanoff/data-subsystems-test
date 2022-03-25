import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import { connect } from 'mongoose';
import * as path from 'path';
import cors from 'cors';

import { paymentInfoService } from './services/PaymentInfoService';

const PORT = 8000;
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.n5jow.mongodb.net/data-subsystems-test?retryWrites=true&w=majority';

const app = express(feathers());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.configure(express.rest());

app.use('/pay', paymentInfoService);

app.use(express.errorHandler());

const main = async () => {
  await connect(MONGO_URL);

  app.listen(PORT)
    .on('listening', () =>
      console.log(`Feathers server listening on localhost:${PORT}`)
    );
};

main();

