import React, {useEffect, useState} from 'react';
import {View, StyleSheet, LayoutChangeEvent} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
  Extrapolation,
  withDelay,
} from 'react-native-reanimated';

const SingleRipple = ({
  delay = 0,
  size,
  color,
}: {
  delay: number;
  size: number;
  color: string;
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.out(Easing.ease),
        }),
        -1,
        false
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 0.5, 1],
      [0.5, 1.5, 2.5],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      progress.value,
      [0, 0.5, 1],
      [1, 0.4, 0],
      Extrapolation.CLAMP
    );
    return {
      transform: [{scale}],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          position: 'absolute',
        },
        animatedStyle,
      ]}
    />
  );
};

export const RippleEffect = ({
  color = '#C10800',
  rippleCount = 3,
  children,
}: {
  color?: string;
  rippleCount?: number;
  children?: React.ReactNode;
}) => {
  const [size, setSize] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const minSize = Math.min(width / 1.5, height / 1.5);
    setSize(minSize);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {size > 0 &&
        Array.from({length: rippleCount}).map((_, i) => (
          <SingleRipple key={i} delay={i * 400} size={size} color={color} />
        ))}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
});
