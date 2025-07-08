import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME_SCREEN: undefined;
  RECEIPT_SCREEN: undefined;
  HISTORY_SCREEN: undefined;
  BOTTOM_TABS: undefined;
};

export type RoutesType = RootStackParamList;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
