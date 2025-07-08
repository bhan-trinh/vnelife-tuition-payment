import React, {useEffect, useRef, useState, forwardRef} from 'react';
import {
  LayoutChangeEvent,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {Box} from '../Box';
import type {RefView} from '../types';
import {equal} from '../Utils';

const radius = 8;
const styles = StyleSheet.create({
  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});

interface TouchRippleProps extends PressableProps {
  renderTouchComponent?: (props: any) => React.ReactElement<any>;
  color?: string;
  duration?: number;
}

interface Ripple {
  unique: number;
  R: number;
  locationX: number;
  locationY: number;
}

const getRipple = ({
  dimension,
  event,
  unique,
}: {
  dimension: {width: number; height: number};
  event: GestureResponderEvent;
  unique: number;
}): Ripple => {
  const {width = 0, height = 0} = dimension;
  const {locationX, locationY} = event.nativeEvent;

  const w2 = width / 2;
  const h2 = height / 2;
  const ofX = Math.abs(w2 - locationX);
  const ofY = Math.abs(h2 - locationY);
  const R = Math.sqrt((w2 + ofX) ** 2 + (h2 + ofY) ** 2);

  return {unique, R, locationX, locationY};
};

const RippleComponent: React.FC<{
  unique: number;
  R: number;
  locationX: number;
  locationY: number;
  color?: string;
  duration?: number;
  onFinish: () => void;
}> = ({
  unique,
  R,
  locationX,
  locationY,
  color = '#fff',
  duration = 300,
  onFinish,
}) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [0.5 / radius, R / radius]),
      },
    ],
    opacity: interpolate(progress.value, [0, 1], [0.5, 0.05]),
    backgroundColor: color,
    top: locationY - radius,
    left: locationX - radius,
  }));

  useEffect(() => {
    progress.value = withTiming(
      1,
      {
        duration,
        easing: Easing.in(Easing.ease),
      },
      finished => {
        if (finished) runOnJS(onFinish)();
      }
    );
  }, [duration, onFinish, progress]);

  return (
    <Animated.View
      key={unique}
      pointerEvents="box-only"
      style={[styles.ripple, animatedStyle]}
    />
  );
};

const TouchRippleBase = forwardRef<RefView, TouchRippleProps>(
  (
    {
      renderTouchComponent = (props: PressableProps) => (
        <Pressable {...props} />
      ),
      onPressIn = () => {},
      onLayout,
      children,
      duration = 300,
      color = '#fff',
      ...props
    },
    ref
  ) => {
    const [offset, setOffset] = useState({width: 0, height: 0});
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const unique = useRef(0);

    const handleLayout = (event: LayoutChangeEvent) => {
      const {layout} = event.nativeEvent;
      setOffset({width: layout.width, height: layout.height});
      onLayout?.(event);
    };

    const startRipple = (event: GestureResponderEvent) => {
      unique.current += 1;
      const newRipple = getRipple({
        dimension: offset,
        event,
        unique: unique.current,
      });
      setRipples(prev => [...prev, newRipple]);
    };

    const handlePressIn = (event: GestureResponderEvent) => {
      startRipple(event);
      onPressIn?.(event);
    };

    const removeRipple = (id: number) => {
      setRipples(prev => prev.filter(r => r.unique !== id));
    };

    return React.cloneElement(
      renderTouchComponent({
        hitSlop: {top: 10, left: 10, right: 10, bottom: 10},
        onLayout: handleLayout,
        onPressIn: handlePressIn,
        ...props,
        children: (
          <>
            {children}
            <Box
              pointerEvents="box-only"
              overflow="hidden"
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}>
              {ripples.map(ripple => (
                <RippleComponent
                  key={ripple.unique}
                  {...ripple}
                  color={color}
                  duration={duration}
                  onFinish={() => removeRipple(ripple.unique)}
                />
              ))}
            </Box>
          </>
        ),
      }),
      ref ? {ref} : {}
    );
  }
);

export const TouchRipple = React.memo(TouchRippleBase, equal);
