import {StyleSheet, StyleProp, ViewStyle} from 'react-native';

/**
 * Splits an array into rows of given size, respecting items marked as full width.
 */
function chunkArray<T extends {_fullWidth?: boolean}>(
  array: T[] | null | undefined,
  size: number
): T[][] {
  if (!array || array.length === 0) return [];

  return array.reduce<T[][]>((acc, val) => {
    if (acc.length === 0) acc.push([]);

    const last = acc[acc.length - 1];
    const rowHadFullWidth = last[0]?._fullWidth === true;
    const currentIsFullWidth = val._fullWidth === true;

    if (last.length < size && !rowHadFullWidth && !currentIsFullWidth) {
      last.push(val);
    } else {
      acc.push([val]);
    }
    return acc;
  }, []);
}

interface CalculateDimensionsParams {
  itemDimension: number;
  staticDimension?: number;
  totalDimension: number;
  fixed?: boolean;
  spacing: number;
  maxItemsPerRow?: number;
}

interface CalculateDimensionsResult {
  itemTotalDimension: number;
  availableDimension: number;
  itemsPerRow: number;
  containerDimension: number;
  fixedSpacing?: number;
}

function calculateDimensions(
  params: CalculateDimensionsParams
): CalculateDimensionsResult {
  const {
    itemDimension,
    staticDimension,
    totalDimension,
    fixed = false,
    spacing,
    maxItemsPerRow,
  } = params;

  const usableTotalDimension = staticDimension ?? totalDimension;
  const availableDimension = usableTotalDimension - spacing;
  const itemTotalDimension = Math.min(
    itemDimension + spacing,
    availableDimension
  );
  const itemsPerRow = Math.min(
    Math.floor(availableDimension / itemTotalDimension),
    maxItemsPerRow ?? Infinity
  );
  const containerDimension = availableDimension / itemsPerRow;

  let fixedSpacing: number | undefined;
  if (fixed) {
    fixedSpacing =
      (totalDimension - itemDimension * itemsPerRow) / (itemsPerRow + 1);
  }

  return {
    itemTotalDimension,
    availableDimension,
    itemsPerRow,
    containerDimension,
    fixedSpacing,
  };
}

function getStyleDimensions(
  style?: StyleProp<ViewStyle>,
  horizontal = false
): {space1: number; space2: number; maxStyleDimension?: number} {
  let space1 = 0;
  let space2 = 0;
  let maxStyleDimension: number | undefined;

  if (style) {
    // Flatten and allow dynamic indexing
    const flatStyle = (
      Array.isArray(style) ? StyleSheet.flatten(style) : style
    ) as ViewStyle & {[key: string]: any};

    const sMaxDimensionXY = horizontal ? 'maxHeight' : 'maxWidth';
    const sPaddingXY = horizontal ? 'paddingVertical' : 'paddingHorizontal';
    const sPadding1 = horizontal ? 'paddingTop' : 'paddingLeft';
    const sPadding2 = horizontal ? 'paddingBottom' : 'paddingRight';

    const maxDim = flatStyle[sMaxDimensionXY];
    if (typeof maxDim === 'number') {
      maxStyleDimension = maxDim;
    }

    const padding = flatStyle[sPaddingXY] ?? flatStyle.padding;
    const padding1 = flatStyle[sPadding1] ?? padding ?? 0;
    const padding2 = flatStyle[sPadding2] ?? padding ?? 0;

    space1 = typeof padding1 === 'number' ? padding1 : 0;
    space2 = typeof padding2 === 'number' ? padding2 : 0;
  }

  return {space1, space2, maxStyleDimension};
}

interface AdjustTotalDimensionsParams {
  totalDimension: number;
  maxDimension?: number;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  adjustGridToStyles?: boolean;
}

function getAdjustedTotalDimensions(
  params: AdjustTotalDimensionsParams
): number {
  const {
    totalDimension,
    maxDimension,
    contentContainerStyle,
    style,
    horizontal = false,
    adjustGridToStyles = false,
  } = params;

  let adjustedTotalDimension = totalDimension;
  let actualMaxDimension = totalDimension;

  if (maxDimension !== undefined && totalDimension > maxDimension) {
    actualMaxDimension = maxDimension;
    adjustedTotalDimension = maxDimension;
  }

  if (adjustGridToStyles) {
    if (contentContainerStyle) {
      const {space1, space2, maxStyleDimension} = getStyleDimensions(
        contentContainerStyle,
        horizontal
      );
      if (maxStyleDimension && adjustedTotalDimension > maxStyleDimension) {
        actualMaxDimension = maxStyleDimension;
        adjustedTotalDimension = maxStyleDimension;
      }
      adjustedTotalDimension -= space1 + space2;
    }

    if (style) {
      const edgeSpaceDiff = (totalDimension - actualMaxDimension) / 2;
      const {space1, space2} = getStyleDimensions(style, horizontal);
      if (space1 > edgeSpaceDiff) {
        adjustedTotalDimension -= space1 - edgeSpaceDiff;
      }
      if (space2 > edgeSpaceDiff) {
        adjustedTotalDimension -= space2 - edgeSpaceDiff;
      }
    }
  }

  return adjustedTotalDimension;
}

interface GenerateStylesParams {
  itemDimension: number;
  containerDimension: number;
  spacing: number;
  fixed?: boolean;
  horizontal?: boolean;
  fixedSpacing?: number;
  itemsPerRow: number;
}

interface GeneratedStyles {
  containerFullWidthStyle: ViewStyle;
  containerStyle: ViewStyle;
  rowStyle: ViewStyle;
}

function generateStyles(params: GenerateStylesParams): GeneratedStyles {
  const {
    itemDimension,
    containerDimension,
    spacing,
    fixed = false,
    horizontal = false,
    fixedSpacing = 0,
    itemsPerRow,
  } = params;

  let rowStyle: ViewStyle = {
    flexDirection: 'row',
    paddingLeft: fixed ? fixedSpacing : spacing,
    paddingBottom: spacing,
  };

  let containerStyle: ViewStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    width: fixed ? itemDimension : containerDimension - spacing,
    marginRight: fixed ? fixedSpacing : spacing,
  };

  const containerFullWidthStyle: ViewStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    width: containerDimension * itemsPerRow - spacing,
    marginBottom: spacing,
  };

  if (horizontal) {
    rowStyle = {
      flexDirection: 'column',
      paddingTop: fixed ? fixedSpacing : spacing,
      paddingRight: spacing,
    };

    containerStyle = {
      flexDirection: 'row',
      justifyContent: 'center',
      height: fixed ? itemDimension : containerDimension - spacing,
      marginBottom: fixed ? fixedSpacing : spacing,
    } as ViewStyle;
  }

  return {
    containerFullWidthStyle,
    containerStyle,
    rowStyle,
  };
}

export {
  chunkArray,
  calculateDimensions,
  getStyleDimensions,
  getAdjustedTotalDimensions,
  generateStyles,
};
