import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Receipt} from '../Receipt';
import {Box, Text} from '@src/components/core';
import {useTheme} from 'react-native-paper';
import {ChevronRightSvg} from '@src/assets/svgs/ChevronRight';
// import Icon from '@react-native-vector-icons/material-design-icons';
import {size} from '@src/utils/styles/size';
import {useNavigation} from '@react-navigation/native';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigation/types';
import {theme} from '@src/assets/themes/theme';
import {AddReceipt} from '../AddReceipt';

interface ReceiptPaneProps {
  receiptList: Array<any>;
}

export const ReceiptPanel: React.FC<ReceiptPaneProps> = ({receiptList}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <>
      <Box row center>
        <Box flex={1}>
          <Text size={size.xl} weight="bold">
            Hóa đơn cần thanh toán
          </Text>
        </Box>
        <Box>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTER_ROOT.RECEIPT_SCREEN)}>
            <Text
              size={size.m}
              color={theme.colors.primary}
              textAlign="right"
              weight="bold">
              Xem tất cả
              <ChevronRightSvg
                width={8}
                height={8}
                color={theme.colors.primary}
              />
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      {receiptList.length ? (
        <FlatList
          horizontal
          initialNumToRender={3}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={receiptList}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => <Box height="100%" width={5} />}
          renderItem={receipt => {
            return (
              <Receipt
                receipt={receipt.item}
                navigateToTransaction={() =>
                  navigation.navigate(ROUTER_ROOT.TRANSACTION_SCREEN, {
                    receipt: receipt.item,
                  })
                }
              />
            );
          }}
          // style={{marginRight: "-5"}}
        />
      ) : (
        <AddReceipt />
      )}
    </>
  );
};
