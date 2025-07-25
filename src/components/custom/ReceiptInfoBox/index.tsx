import React, {useState} from 'react';
import {Box, Text} from '@src/components/core';
import {TouchableOpacity} from 'react-native';
import {size} from '@src/utils/styles/size';
import {theme} from '@src/assets/themes/theme';
import {Portal, RadioButton} from 'react-native-paper';
import {ChiTietHoaDon} from '@src/components/core/Utils';
import {HoaDon} from '@src/data/receipt/HoaDon';
import {ReceiptDetailBox} from '../ReceiptDetailBox';
import {formatMoney} from '@src/utils/func/formatMoney';

type ReceiptInfoBoxProps = {
  receiptInfo: HoaDon;
  isSelected: boolean;
  toggleSelected: () => void;
};

export const ReceiptInfoBox = ({
  receiptInfo,
  isSelected,
  toggleSelected,
}: ReceiptInfoBoxProps) => {
  const bgColor = isSelected ? theme.colors.primary : '#00000000';

  // Set up receipt detail modal toggle
  const [visible, setVisible] = useState(false);
  const toggleDetail = () => setVisible(!visible);
  return (
    <>
      <TouchableOpacity
        style={{
          elevation: 2,
          backgroundColor: 'white',
          borderRadius: 20,
          borderColor: bgColor,
          borderWidth: 1,
        }}
        onPress={toggleSelected}>
        <Box row gap={10} center padding={10}>
          <RadioButton
            value={''}
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={toggleSelected}
            color={theme.colors.secondary}
          />
          <Box gap={4} flex={1}>
            <Text size={size.l} color={'black'} weight="bold">
              {receiptInfo.noi_dung}
            </Text>
            <Text size={size.l} color={'black'} textAlign="left">
              {formatMoney(receiptInfo.tong_tien)} đ
            </Text>
          </Box>

          <Box alignItems="flex-end" padding={8}>
            <TouchableOpacity onPress={toggleDetail}>
              <Text size={size.l} color={theme.colors.secondary}>
                Chi tiết {'>'}
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </TouchableOpacity>
      <Portal>
        <ReceiptDetailBox
          receiptName={receiptInfo.ten_thanh_toan}
          receiptDetail={receiptInfo.chi_tiet}
          visible={visible}
          setVisible={toggleDetail}
        />
      </Portal>
    </>
  );
};
