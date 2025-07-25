import {IS_IOS} from '@src/common/devices';
import {secretKey} from '@src/utils/const';
import {Linking} from 'react-native';
import {sha256} from 'react-native-sha256';

export const generateRandomString = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const encryptSha256 = async (
  requestId?: string,
  requestDate?: string
) => {
  try {
    const encryptedString = await sha256(
      `${secretKey}|${requestId}|${requestDate}`
    );
    return encryptedString;
  } catch (error) {
    return `${secretKey}`;
  }
};

export const calPercent = (value: number, total: number): number => {
  if (total === 0) {
    return 0;
  }

  let percentage: number = (value / total) * 100;
  percentage = Math.round((percentage + Number.EPSILON) * 100) / 100;

  if (percentage % 1 === 0) {
    return Math.round(percentage);
  }

  return percentage;
};

export const callNumbe = (phoneNumber: string) => {
  const url = IS_IOS ? `tel:${phoneNumber}` : `telprompt:${phoneNumber}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        console.warn('Không thể mở URL:', url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('Lỗi khi gọi số:', err));
};

export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};
