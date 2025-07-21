import {RootStackParamList} from '@src/navigation/types';

type Entries<T> = {
  [K in keyof T]: K;
};

export const ROUTER_ROOT: Entries<RootStackParamList> = {
  HOME_SCREEN: 'Trang chủ',
  RECEIPT_SCREEN: 'Hoá đơn',
  HISTORY_SCREEN: 'Lịch sử',
  BOTTOM_TABS: 'BOTTOM_TABS',
  TRANSACTION_SCREEN: 'Thanh toán',
  LOOKUP_SCREEN: 'Tra cứu dịch vụ',
  SERVICE_SCREEN: 'Tra cứu',
};
