import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Receipt} from '../Receipt';
import {Box, Text} from '@src/components/core';
import {useTheme} from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';

interface ReceiptPaneProps {
  receiptList: Array<any>;
}

export const ReceiptPanel: React.FC<ReceiptPaneProps> = ({receiptList}) => {
  const theme = useTheme();
  return (
    <>
      <Box row center>
        <Box width="70%">
          <Text size={18} weight="bold">
            Hóa đơn cần thanh toán
          </Text>
        </Box>
        <Box width="30%">
          <TouchableOpacity>
            <Text
              size={14}
              color={theme.colors.primary}
              textAlign="right"
              weight="bold">
              Xem tất cả
              {/* <Icon
                name="chevron-right"
                size={15}
                color={theme.colors.primary}
              /> */}
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
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
              icon={receipt.item.icon}
              title={receipt.item.title}
              id={receipt.item.id}
              date={receipt.item.date}
              dueDate={receipt.item.dueDate}
              amount={receipt.item.amount}
            />
          );
        }}
        // style={{marginRight: "-5"}}
      />
    </>
  );
};
