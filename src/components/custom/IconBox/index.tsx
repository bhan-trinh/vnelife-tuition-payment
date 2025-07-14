import {size} from '@src/common/styles/size';
import {Box, Text} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const IconBox = ({icon, notif, title}) => {
  return (
    <Box
      center
      justifyContent="flex-start"
      width="25%"
      paddingHorizontal={10}
      marginTop={20}>
      <TouchableOpacity style={styles.servicesButton}>{icon}</TouchableOpacity>
      {notif && (
        <Box
          color="#C10800"
          position="absolute"
          right={16}
          top={0}
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
      <Text size={size.m} textAlign="center">
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  servicesButton: {
    borderRadius: 45,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
  },
});
