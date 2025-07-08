import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParamList, RoutesType} from './types';

export const refNavigation = createNavigationContainerRef<RootStackParamList>();

export const navigateFromCurrentScreen = (
  router: keyof RoutesType,
  params?: StackScreenProps<RoutesType>['route']['params']
) => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.navigate(router, params));
  }
};

export const navigateGoback = () => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.goBack());
  }
};
