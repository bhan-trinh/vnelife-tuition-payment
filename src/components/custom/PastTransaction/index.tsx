import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {size} from '@src/utils/styles/size';
import {Box, Text} from '@src/components/core';
import React from 'react';
import {IconBox} from '../IconBox';
import {IconBoxSingle} from '../IconBoxSingle';
import {theme} from '@src/assets/themes/theme';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {tuitionServiceList} from '@src/data/service/tuitionServiceList';
import {formatMoney} from '@src/utils/func/formatMoney';

type GiaoDich = {
  id: number;
  ten_thanh_toan: string;
  dich_vu: string;
  thoi_gian_giao_dich: any;
  tong_tien: string;
};

type PastTransactionProps = {
  payment: GiaoDich;
};

export const PastTransaction = ({payment}: PastTransactionProps) => {
  return (
    <Box
      row
      gap={16}
      paddingVertical={20}
      borderBottomWidth={1}
      borderBottomColor="grey">
      <IconBoxSingle icon={tuitionServiceImages.hocmai} title="" />
      <Box flex={1} gap={4}>
        <Text size={size.xl} color={'black'} weight="bold">
          {payment.ten_thanh_toan}
        </Text>
        <Box>
          <Text size={size.m} color={'grey'}>
            {payment.thoi_gian_giao_dich}
          </Text>
        </Box>

        <Box>
          <Text size={size.l} color={theme.colors.primary} weight="bold">
            -{formatMoney(payment.tong_tien)} VNĐ
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
