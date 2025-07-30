import {getToken} from '../api-hp/core';
import {getData} from '../async-storage';
import {ROUTES} from './routes';

export const fetchPaymentSheetParams = async () => {
  const token = await getData('token');
  const response = await fetch(ROUTES.PAYMENT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  });
  try {
    const {paymentIntent, ephemeralKey, customer} = await response.json();
    console.log(paymentIntent + '////' + ephemeralKey);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  } catch (err) {
    console.log(`Fetch Payment Failed: ${err}`);
  }
};
