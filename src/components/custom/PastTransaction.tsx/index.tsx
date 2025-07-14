import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {size} from '@src/common/styles/size';
import {Box, Text} from '@src/components/core';
import React from 'react';
import {IconBox} from '../IconBox';
import {IconBoxSingle} from '../IconBoxSingle';

export const PastTransaction = () => {
  return (
    <Box
      row
      gap={16}
      paddingVertical={20}
      borderBottomWidth={1}
      borderBottomColor="grey">
      <IconBoxSingle
        icon={<CarOutlineSvg width={24} height={24} color="black" />}
        title=""
      />
      <Box flex={1} gap={4}>
        <Text size={size.xl} color={'black'} weight="bold" width={'70%'}>
          Thanh toán tiền học (10/2025)
        </Text>
        <Box row alignItems="flex-end">
          <Text size={size.m} color={'grey'}>
            09/10/2025 09:00:00
          </Text>

          <Box flex={1} justifyContent="flex-end">
            <Text size={size.l} color={'blue'} textAlign="right" weight="bold">
              -10.000.000 VNĐ
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
