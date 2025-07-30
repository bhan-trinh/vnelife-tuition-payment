import {getToken} from '../api-hp/core';
import {getData} from '../async-storage';
import {ROUTES} from './routes';

export const fetchPaymentSheetParams = async (
  amount: number,
  receiptId: any
) => {
  const token = await getData('token');
  const response = await fetch(ROUTES.PAYMENT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({
      amount: amount,
      receiptId: receiptId,
    }),
  });
  try {
    const {paymentIntent, ephemeralKey, customer} = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  } catch (err) {
    console.log(`Fetch Payment Failed: ${err}`);
  }
};

export const updateSuccessfulPayment = async (receiptId: any) => {
  const token = await getData('token');
  const response = await fetch(ROUTES.SUCCESS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({
      receiptId: receiptId,
    }),
  });
};
