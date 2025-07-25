import {BASE_API_URL} from '@src/utils/const';
import {createRequest} from './core';

const request = createRequest(BASE_API_URL, 300000);
export default request;
