import {size} from '@src/common/styles/size';
import {Box, Text} from '@src/components/core';
import {ReactNode} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface IconBoxProps {
  icon: ReactNode;
  notif?: number | null;
  title: string;
  onPress: () => void;
}

export const IconBox = ({icon, notif, title, onPress}: IconBoxProps) => {
  return (
    <Box
      center
      justifyContent="flex-start"
      width="25%"
      paddingHorizontal={10}
      marginTop={20}>
      <TouchableOpacity onPress={onPress}>
        <Box style={styles.servicesButton}>{icon}</Box>
      </TouchableOpacity>
      {notif && (
        <Box
          color="#C10800"
          position="absolute"
          right={10}
          top={-5}
          width={18}
          height={18}
          middle
          center
          radius={10}>
          <Text size={size.xs} weight="bold" color="white">
            {notif}
          </Text>
        </Box>
      )}
      <Text size={size.m} color={'black'} textAlign="center">
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  servicesButton: {
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
});
