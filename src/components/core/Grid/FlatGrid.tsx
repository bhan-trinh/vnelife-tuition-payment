import moment from 'moment';
import * as React from 'react';
import {forwardRef, ForwardedRef} from 'react';
import {StyleSheet, FlatList, FlatListProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {JumpingTransition, ReduceMotion} from 'react-native-reanimated';

export const requestID = (idUser: string | number) => {
  const id = `${'Super-App'}-${idUser}-VNPT-${moment().unix()}`;
  return id;
};
type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface ExtraProps {
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
  numColumns?: number;
  ref?: ForwardedRef<FlatList<any>>;
  gap?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  showsVerticalScrollIndicator?: boolean;
  keyExtractor?: (item: any, index: number) => string;
}

interface GridFlatListInterface
  extends SimpleSpread<FlatListProps<any>, ExtraProps> {}

const randomKeyExtractor = (item: any, index: number): string => {
  return item.id ? item.id : `${index}_${requestID('')}`;
};

const GridFlatList = ({
  ref,
  data,
  renderItem,
  numColumns = 2,
  gap = 12,
  paddingHorizontal = 2,
  paddingTop = 2,
  showsVerticalScrollIndicator = false,
  keyExtractor = randomKeyExtractor,
  ...props
}: GridFlatListInterface) => {
  const firstRowElementStyle = (index: number) => {
    if (index < numColumns) {
      return {
        paddingTop,
      };
    }

    return null;
  };

  const lastRowChildStyle = (index: number) => {
    if ((index + 1) % numColumns === 0) {
      return {paddingRight: paddingHorizontal, paddingLeft: 0};
    }
    return null;
  };

  const lastOddChildStyle = (index: number) => {
    if (index + 1 === data.length && (index + 1) % 2 !== 0) {
      return {
        paddingRight: gap + paddingHorizontal,
      };
    }

    return null;
  };

  return (
    <FlatList
      ref={ref}
      columnWrapperStyle={styles.row}
      data={data}
      numColumns={numColumns}
      renderItem={({item, index}) => (
        <Animated.View
          layout={JumpingTransition.duration(1000)
            .delay(500)
            .reduceMotion(ReduceMotion.Never)
            .withCallback(finished => {
              console.log(`finished without interruptions: ${finished}`);
            })}
          style={[
            {
              flex: 1 / numColumns,
              paddingLeft: paddingHorizontal,
              paddingBottom: gap,
              paddingRight: gap,
            },
            firstRowElementStyle(index),
            lastRowChildStyle(index),
            lastOddChildStyle(index),
          ]}>
          {renderItem(item, index)}
        </Animated.View>
      )}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default forwardRef(
  (props: GridFlatListInterface, ref: ForwardedRef<FlatList<any>>) =>
    GridFlatList({ref, ...props})
);
