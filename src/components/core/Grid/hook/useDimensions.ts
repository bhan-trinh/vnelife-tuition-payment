import {useState, useCallback, useMemo} from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {getAdjustedTotalDimensions, calculateDimensions} from '../utils';

export interface UseDimensionsProps {
  staticDimension?: number;
  maxDimension?: number;
  horizontal?: boolean;
  onLayout?: (e: LayoutChangeEvent) => void;
  adjustGridToStyles?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  itemDimension: number;
  spacing: number;
  fixed?: boolean;
  maxItemsPerRow?: number;
}

export interface UseDimensionsResult {
  totalDimension: number;
  onLayout: (e: LayoutChangeEvent) => void;
  containerDimension: number;
  itemsPerRow: number;
  fixedSpacing?: number;
}

const useDimensions = (props: UseDimensionsProps): UseDimensionsResult => {
  const {
    staticDimension,
    maxDimension,
    horizontal = false,
    onLayout,
    adjustGridToStyles = false,
    contentContainerStyle,
    style,
    itemDimension,
    spacing,
    fixed = false,
    maxItemsPerRow,
  } = props;

  const [totalDimension, setTotalDimension] = useState<number>(() => {
    if (staticDimension !== undefined) {
      return staticDimension;
    }
    const dimensionKey = horizontal ? 'height' : 'width';
    return getAdjustedTotalDimensions({
      totalDimension: Dimensions.get('window')[dimensionKey],
      maxDimension,
      contentContainerStyle,
      style,
      horizontal,
      adjustGridToStyles,
    });
  });

  const onLayoutLocal = useCallback(
    (e: LayoutChangeEvent) => {
      if (staticDimension === undefined) {
        const {width = 0, height = 0} = e.nativeEvent.layout;
        const raw = horizontal ? height : width;
        const newTotal = getAdjustedTotalDimensions({
          totalDimension: raw,
          maxDimension,
          contentContainerStyle,
          style,
          horizontal,
          adjustGridToStyles,
        });
        if (newTotal > 0 && newTotal !== totalDimension) {
          setTotalDimension(newTotal);
        }
      }
      onLayout?.(e);
    },
    [
      staticDimension,
      totalDimension,
      horizontal,
      maxDimension,
      contentContainerStyle,
      style,
      adjustGridToStyles,
      onLayout,
    ]
  );

  const {containerDimension, itemsPerRow, fixedSpacing} = useMemo(
    () =>
      calculateDimensions({
        itemDimension,
        staticDimension,
        totalDimension,
        spacing,
        fixed,
        maxItemsPerRow,
      }),
    [
      itemDimension,
      staticDimension,
      totalDimension,
      spacing,
      fixed,
      maxItemsPerRow,
    ]
  );

  return {
    totalDimension,
    onLayout: onLayoutLocal,
    containerDimension,
    itemsPerRow,
    fixedSpacing,
  };
};

export default useDimensions;
