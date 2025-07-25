import {Dimensions, Platform} from 'react-native';

export const UIDevice = Dimensions.get('window');
export const IS_IOS = Platform.OS === 'ios';
