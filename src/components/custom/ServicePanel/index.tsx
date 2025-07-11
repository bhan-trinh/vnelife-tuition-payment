import React from 'react';
import {Box, Text} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

export const ServicePanel = ({servicesList}) => {
  const theme = useTheme();
  try {
    return (
      <Box flex={5}>
        <Text size={18} weight="bold">
          Danh mục dịch vụ
        </Text>
        <Box style={styles.servicesBox}>
          {servicesList.map((element: any[], index: number) => {
            return (
              <Box
                key={index}
                center
                justifyContent="flex-start"
                width="25%"
                paddingHorizontal={10}
                marginTop={20}>
                <TouchableOpacity style={styles.servicesButton}>
                  {element.icon}
                </TouchableOpacity>
                {element.notif && (
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
                    <Text size={10} weight="bold" color="white">
                      {element.notif}
                    </Text>
                  </Box>
                )}
                <Text size={14} textAlign="center">
                  {element.title}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  } catch (error) {
    console.log(error);
  }
};

const styles = StyleSheet.create({
  servicesBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  servicesButton: {
    borderRadius: 45,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
  },
});
