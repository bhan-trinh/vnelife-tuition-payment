import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {size} from '@src/common/styles/size';
import {Box, Text} from '@src/components/core';
import React, {ReactNode} from 'react';
import {IconBox} from '../IconBox';
import {IconBoxSingle} from '../IconBoxSingle';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {theme} from '@src/assets/colors/theme';
import {ReceiptItem} from '@src/data/ReceiptData/ReceiptItem';
import {formatMoney} from '@src/common/func/formatMoney';

interface ReceiptProps {
  receipt: ReceiptItem;
  navigateToTransaction: () => void;
}

export const SimpleReceipt: React.FC<ReceiptProps> = ({
  receipt,
  navigateToTransaction,
}) => {
  return (
    <Box
      color="white"
      radius={20}
      padding={20}
      borderColor={theme.colors.primary}
      elevation={3}>
      <Box row gap={10} middle center>
        <IconBoxSingle
          icon={
            tuitionServiceImages[
              receipt.dich_vu as keyof typeof tuitionServiceImages
            ]
          }
        />
        <Box width={'45%'}>
          <Text size={size.m} color={'black'} weight="bold">
            {receipt.thanh_toan[0].noi_dung}
          </Text>
          <Text size={size.m} color={'grey'}>
            {receipt.hoc_sinh_info.ten_hoc_sinh}
          </Text>

          <Text size={size.m} color={'grey'}>
            {receipt.hoc_sinh_info.lop_hoc_id}
          </Text>
        </Box>
        <Box width={'35%'}>
          {/* Format amount of money with dots */}
          <Text size={size.l} color={'black'} weight="bold">
            {formatMoney(receipt.thanh_toan[0].tong_tien)} đ
          </Text>
          <TouchableOpacity onPress={navigateToTransaction}>
            <Text size={size.m} color={theme.colors.primary}>
              Thanh toán {'>'}
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};
