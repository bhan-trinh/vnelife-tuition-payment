import {SERVER_URL} from '../../../config';

export const ROUTES = {
  LOGIN: SERVER_URL + '/login',
  GET_RECEIPT_BY_ID: SERVER_URL + '/receipt/',
  GET_RECEIPT_BY_BILL_ID: SERVER_URL + '/receipt/bill/',
  GET_ALL_RECEIPT_BY_USER_ID: SERVER_URL + '/receipt/user/getAll',
};
