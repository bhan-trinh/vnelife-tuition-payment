import React from 'react';
import {Box, Text} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';
import {size} from '@src/common/styles/size';
import {IconBox} from '../IconBox';

export const ServicePanel = ({servicesList}) => {
  const theme = useTheme();
  try {
    return (
      <Box flex={5}>
        <Text size={size.xl} weight="bold">
          Danh mục dịch vụ
        </Text>
        <Box flex={1} row wrap="wrap">
          {servicesList.map((element: any[], index: number) => {
            return (
              <IconBox
                key={index}
                icon={element.icon}
                notif={element.notif}
                title={element.title}
              />
            );
          })}
        </Box>
      </Box>
    );
  } catch (error) {
    console.log(error);
  }
};
