import {useCallback, useEffect} from 'react';

export type KeyExtractor<T> = (item: T, index: number) => string;

export interface UseRowsProps<T> {
  data: T[];
  itemsPerRow: number;
  invertedRow?: boolean;
  keyExtractor?: KeyExtractor<T>;
  onItemsPerRowChange?: (itemsPerRow: number) => void;
}

export interface UseRowsResult<T> {
  rows: T[][];
  keyExtractor: (rowItems: T[], index: number) => string;
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function useRows<T>({
  data,
  itemsPerRow,
  invertedRow = false,
  keyExtractor,
  onItemsPerRowChange,
}: UseRowsProps<T>): UseRowsResult<T> {
  let rows = chunkArray(data, itemsPerRow);
  if (invertedRow) {
    rows = rows.map(row => [...row].reverse());
  }
  const localKeyExtractor = useCallback(
    (rowItems: T[], rowIndex: number) => {
      if (keyExtractor) {
        return rowItems.map((item, idx) => keyExtractor(item, idx)).join('_');
      }
      return `row_${rowIndex}`;
    },
    [keyExtractor]
  );
  useEffect(() => {
    onItemsPerRowChange?.(itemsPerRow);
  }, [itemsPerRow, onItemsPerRowChange]);

  return {rows, keyExtractor: localKeyExtractor};
}

export default useRows;
