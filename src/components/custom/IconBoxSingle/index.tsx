import {size} from '@src/utils/styles/size';
import {Box, Text} from '@src/components/core';
import {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type IconBoxSingleProps = {
  icon: ReactNode;
  width?: number;
  height?: number;
  elevation?: number;
};

export const IconBoxSingle = ({
  icon,
  width,
  height,
  elevation,
}: IconBoxSingleProps) => {
  return (
    <Box
      elevation={elevation ? elevation : 0}
      radius={12}
      color="white"
      center
      middle
      width={width ? width : 48}
      height={height ? height : 48}
      overflow="hidden">
      {icon}
    </Box>
  );
};
