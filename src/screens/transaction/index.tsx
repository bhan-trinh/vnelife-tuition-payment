import React, {useState} from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {size} from '@src/utils/styles/size';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {IconBoxSingle} from '@src/components/custom/IconBoxSingle';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {theme} from '@src/assets/themes/theme';
import {Background} from '@src/components/custom/Background/Background';
import {ReceiptInfoBox} from '@src/components/custom/ReceiptInfoBox';
import {StudentInfoBox} from '@src/components/custom/StudentInfoBox';
import {formatMoney} from '@src/utils/func/formatMoney';

export interface TransactionScreenProps
  extends RootStackScreenProps<'TRANSACTION_SCREEN'> {}
export type TransactionScreenRef = {};
const TransactionScreen = React.forwardRef<
  TransactionScreenRef,
  TransactionScreenProps
>((props, _ref) => {
  // Get props and route parameters
  const {navigation, route} = props;
  const {receipt} = route.params;

  // Useless code removed later
  const {height} = useWindowDimensions();

  // Set up bill selection array toggle
  const initBillState = receipt.thanh_toan.map(_ => true);
  const [billsSelected, setBillsSelected] = useState(initBillState);
  const toggleBill = (index: number) => {
    var newBillsSelected = [...billsSelected];
    newBillsSelected[index] = !newBillsSelected[index];
    setBillsSelected(newBillsSelected);
  };

  const calcTotal = () => {
    var total = 0;
    for (var billIndex in receipt.thanh_toan) {
      if (billsSelected[billIndex]) {
        total += receipt.thanh_toan[billIndex].tong_tien;
      }
    }
    return total;
  };

  return (
    <Box flex={1} color="white">
      <Background>
        <ScrollView
          style={{backgroundColor: '#00000000', height: '100%'}}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <Box
            paddingHorizontal="7%"
            paddingVertical={height * 0.05}
            justifyContent="space-around"
            color="transparent"
            style={{gap: 15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTER_ROOT.RECEIPT_SCREEN)}>
              <Text size={size.xl} color={'black'} weight="bold">
                {'<'} Thanh toán học phí
              </Text>
            </TouchableOpacity>
            <Box
              paddingVertical={10}
              justifyContent="space-around"
              center
              gap={10}>
              <IconBoxSingle
                icon={
                  tuitionServiceImages[
                    receipt.dich_vu.toLowerCase() as keyof typeof tuitionServiceImages
                  ]
                }
              />
              <Text size={size.xl} color={'black'} weight="bold">
                {receipt.thanh_toan[0].noi_dung}
              </Text>
              <Box height={1} color="black" marginBottom={10} width={'100%'} />
              <StudentInfoBox infoHs={receipt.hoc_sinh_info} />
            </Box>

            <Box height={1} color="black" />

            <Box paddingVertical={10} justifyContent="space-around" gap={10}>
              <Box width={'100%'}>
                <Text size={size.xl} color={'black'} weight="bold">
                  Thông tin học phí
                </Text>
              </Box>
              {receipt.thanh_toan.map((bill, index: number) => {
                return (
                  <ReceiptInfoBox
                    key={index}
                    receiptInfo={bill}
                    isSelected={billsSelected[index]}
                    toggleSelected={() => toggleBill(index)}
                  />
                );
              })}
            </Box>
          </Box>
        </ScrollView>
      </Background>
      <Box
        color="white"
        elevation={24}
        height={100}
        bottom={100}
        padding={10}
        gap={10}>
        <Box row alignItems="center">
          <Box flex={1}>
            <Text size={size.m} color={'grey'}>
              Tổng tiền thanh toán
            </Text>
          </Box>
          <Box flex={1}>
            <Text size={size.l} color={'black'} textAlign="right">
              {formatMoney(calcTotal())} đ
            </Text>
          </Box>
        </Box>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text size={size.l} weight="bold" color={'white'} textAlign="center">
            Xác nhận và tiếp tục
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
});

export default React.memo(TransactionScreen);
