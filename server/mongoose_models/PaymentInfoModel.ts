import { Schema, model } from 'mongoose';

import { IPaymentInfo } from '../models/IPaymentInfo';

const MessageSchema = new Schema<IPaymentInfo>({
  cardNumber: {
    type: String,
    required: true,
  },

  expDate: {
    type: String,
    required: true
  },

  cvv: {
    type: String,
    required: true,
  },

  amount: {
    type: String,
    required: true,
  },
});

export const paymentInfoModel = model('PaymentInfo', MessageSchema);