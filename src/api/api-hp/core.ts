/* eslint-disable prettier/prettier */
/* eslint no-use-before-define: 0 */ // --> OFF
import {getData} from '../async-storage';
import {ROUTES} from './routes';

export const getToken = async (username: string, password: string) => {
  const body = {
    username: username,
    password: password,
  };
  const response = await fetch(ROUTES.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const fetchReceiptById = async (id: string) => {
  const token = await getData('token');
  const response = await fetch(ROUTES.GET_RECEIPT_BY_ID + id, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchAllReceiptsByUserId = async () => {
  const token = await getData('token');
  const response = await fetch(ROUTES.GET_ALL_RECEIPT_BY_USER_ID, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}


