import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ReceiptItem} from '@src/data/ReceiptData/ReceiptItem';

export type RootStackParamList = {
  HOME_SCREEN: undefined;
  RECEIPT_SCREEN: undefined;
  HISTORY_SCREEN: undefined;
  BOTTOM_TABS: undefined;
  TRANSACTION_SCREEN: {receipt: ReceiptItem};
  LOOKUP_SCREEN: {service: string | undefined};
  SERVICE_SCREEN: undefined;
};

export type RoutesType = RootStackParamList;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
