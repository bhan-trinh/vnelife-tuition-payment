import React, {useCallback, ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

export interface RenderItemParams<T> {
  item: T;
  index: number;
  separators?: any;
  rowIndex: number;
}

export type KeyExtractor<T> = (item: T, index: number) => string;

export interface UseRenderRowProps<T> {
  renderItem: (params: RenderItemParams<T>) => ReactNode;
  spacing: number;
  keyExtractor?: KeyExtractor<T>;
  externalRowStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  invertedRow?: boolean;
}

export interface RowRenderArgs<T> {
  rowItems: T[];
  rowIndex: number;
  separators?: any;
  isLastRow: boolean;
  itemsPerRow: number;
  rowStyle: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
  containerFullWidthStyle: StyleProp<ViewStyle>;
}

function useRenderRow<T>({
  renderItem,
  spacing,
  keyExtractor,
  externalRowStyle,
  itemContainerStyle,
  horizontal = false,
  invertedRow = false,
}: UseRenderRowProps<T>) {
  return useCallback(
    ({
      rowItems,
      rowIndex,
      separators,
      isLastRow,
      itemsPerRow,
      rowStyle,
      containerStyle,
      containerFullWidthStyle,
    }: RowRenderArgs<T>) => {
      const additionalRowStyle: StyleProp<ViewStyle> = isLastRow
        ? horizontal
          ? {marginRight: spacing}
          : {marginBottom: spacing}
        : undefined;

      const hasFullWidthItem = rowItems.some((i: any) => i._fullWidth);

      return (
        <View
          style={[
            rowStyle,
            additionalRowStyle,
            externalRowStyle,
            hasFullWidthItem
              ? // eslint-disable-next-line react-native/no-inline-styles
                {flexDirection: 'column', paddingBottom: 0}
              : undefined,
          ]}>
          {rowItems.map((item, idx) => {
            const i = invertedRow ? itemsPerRow - 1 - idx : idx;
            const globalIndex = rowIndex * itemsPerRow + i;
            const key = keyExtractor
              ? keyExtractor(item, globalIndex)
              : `item_${globalIndex}`;

            return (
              <View
                key={key}
                style={[
                  (item as any)._fullWidth
                    ? containerFullWidthStyle
                    : containerStyle,
                  itemContainerStyle,
                ]}>
                {renderItem({item, index: globalIndex, separators, rowIndex})}
              </View>
            );
          })}
        </View>
      );
    },
    [
      renderItem,
      spacing,
      keyExtractor,
      externalRowStyle,
      itemContainerStyle,
      horizontal,
      invertedRow,
    ]
  );
}

export default useRenderRow;
