import { IPaymentInfo } from '../models/IPaymentInfo';

const baseUrl = 'http://localhost:8000';

export const pay = (paymentInfo: IPaymentInfo) => {
  fetch(`${baseUrl}/pay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentInfo),
  })
};
