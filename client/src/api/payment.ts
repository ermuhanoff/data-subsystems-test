import { IPaymentInfo } from '../models/IPaymentInfo';
import { showNotification } from '../utils/utils';

const baseUrl = 'http://localhost:8000';

const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const pay = async (paymentInfo: IPaymentInfo) => {
  const response = await fetch(`${baseUrl}/pay`, {
    ...postOptions,
    body: JSON.stringify(paymentInfo),
  });

  if (!response.ok) {
    showNotification('error', response.statusText);
  }

  return await response.json();
};
