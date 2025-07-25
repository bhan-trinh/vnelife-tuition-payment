import React from 'react';
import {TouchRippleSingle} from '../Touch';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useCheckboxGroup} from './CheckboxGroup';
import {StyleSheet} from 'react-native';
import defaultStyles from '@src/utils/styles';

export type CheckboxProps<T = any> = {
  value: T;
  size?: number;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
};

export const Checkbox = React.memo(<T,>(props: CheckboxProps<T>) => {
  const {
    value,
    size = 20,
    color = '#000',
    borderColor = '#FFFFFF',
    disabled,
  } = props;
  const {selectedValue, onValueChange} = useCheckboxGroup<T>();

  const checked = value === selectedValue;
  const progress = useDerivedValue(() => (checked ? 1 : 0));
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(progress.value, {duration: 200}),
  }));
  const borderStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(progress.value, [0, 1], [borderColor, color]),
  }));
  return (
    <TouchRippleSingle
      disabled={disabled}
      touchProps={{style: styles.root}}
      onPress={() => onValueChange(value)}>
      <Animated.View
        style={[
          defaultStyles.justifyCenter,
          defaultStyles.alignItemsCenter,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            padding: size * 0.2,
            width: size,
            height: size,
            borderWidth: 1.5,
            borderRadius: size,
          },
          borderStyle,
        ]}>
        <Animated.View
          style={[
            {
              width: size * 0.6,
              height: size * 0.6,
              borderRadius: size * 0.3,
              backgroundColor: color,
            },
            animatedStyle,
          ]}
        />
      </Animated.View>
    </TouchRippleSingle>
  );
});

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    borderRadius: 100,
  },
});
