import {Modal} from 'react-native-paper';
import {Box, Text} from '@src/components/core';
import {theme} from '@src/assets/colors/theme';
import {size} from '@src/common/styles/size';
import {ChiTietHoaDon} from '@src/data/ReceiptData/ChiTietHoaDon';
import {formatMoney} from '@src/common/func/formatMoney';

type ReceiptDetailBoxProps = {
  receiptName: string;
  receiptDetail: ChiTietHoaDon[];
  visible: boolean;
  setVisible: () => void;
};

export const ReceiptDetailBox = ({
  receiptName,
  receiptDetail,
  visible,
  setVisible,
}: ReceiptDetailBoxProps) => {
  return (
    <Modal
      visible={visible}
      onDismiss={setVisible}
      contentContainerStyle={{
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 30,
        alignItems: 'center',
        gap: 6,
      }}>
      <Text size={size.m} color="black" weight="bold">
        Chi tiết hạng mục thu phí
      </Text>
      <Text
        size={size.m}
        color={theme.colors.primary}
        weight="bold"
        textAlign="center">
        {receiptName}
      </Text>
      {receiptDetail.map(detailItem => {
        return (
          <Box key={detailItem.code} row alignItems="center">
            <Box flex={1}>
              <Text size={size.m} color={'grey'}>
                {detailItem.ten}
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {formatMoney(detailItem.tong_tien)}đ
              </Text>
            </Box>
          </Box>
        );
      })}

      <Box row alignItems="center">
        <Box flex={1}>
          <Text size={size.m} color={'black'} weight="bold">
            Tổng tiền
          </Text>
        </Box>
        <Box flex={1}>
          <Text size={size.l} color={'black'} textAlign="right" weight="bold">
            {receiptDetail
              .map(item => parseInt(item.tong_tien))
              .reduce((acc, cur) => acc + cur)
              .toLocaleString()
              .replaceAll(',', '.')}
            đ
          </Text>
        </Box>
      </Box>
    </Modal>
  );
};
