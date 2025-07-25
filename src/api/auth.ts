import {APIs} from '@src/api/configs';
import {handleError} from '@src/api/handleError';
import request from '@src/api/request';
import {ApiResponse} from '@src/api/types';
import moment from 'moment';
import {encryptSha256, generateRandomString} from '@src/utils/helper';

export type PostLoginRequest = {
  username: string;
  password: string;
};
export type PostLoginResponse = {
  success: boolean;
};
export const postLogin: (
  body: PostLoginRequest
) => Promise<ApiResponse<PostLoginResponse>> = async body => {
  try {
    let requestId = generateRandomString(10);
    let requestDate = moment().format('YYYYMMDDHHmmss');
    let key = await encryptSha256(requestId, requestDate);
    const result = await request().post<PostLoginResponse>(
      `${APIs.POST_LOGIN}`,
      body,
      {
        headers: {
          'X-VPayEvent-Signature': `${key}`,
        },
      }
    );
    console.log({result});
    return {
      status: true,
      data: result?.data,
    };
  } catch (error) {
    return handleError(error);
  }
};
