import React, {useContext, useState} from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {size} from '@src/utils/styles/size';
import {SimpleReceipt} from '@src/components/custom/SimpleReceipt';
import {receiptList} from '@src/data/receipt/receiptList';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {Background} from '@src/components/custom/Background/Background';
import {ReceiptContext} from '@src/contexts/receipt';
import {useFocusEffect} from '@react-navigation/native';
import {fetchAllReceiptsByUserId} from '@src/api/api-hp/core';

export interface ReceiptScreenProps
  extends RootStackScreenProps<'RECEIPT_SCREEN'> {}
export type ReceiptScreenRef = {};
const ReceiptScreen = React.forwardRef<ReceiptScreenRef, ReceiptScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    const {height} = useWindowDimensions();
    const [searchWord, setSearchWord] = useState('');
    const {receipts, setReceipts} = useContext(ReceiptContext);

    useFocusEffect(
      React.useCallback(() => {
        const fetchReceipts = async () => {
          try {
            const res = await fetchAllReceiptsByUserId();
            setReceipts(res);
          } catch (err) {
            console.log(`Fetch Receipts Failed: ${err}`);
          }
        };
        fetchReceipts();

        return () => {};
      }, [])
    );
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
                onPress={() => navigation.navigate(ROUTER_ROOT.HOME_SCREEN)}>
                <Text size={size.xl} color={'black'} weight="bold">
                  {'<'} Hóa đơn cần thanh toán
                </Text>
              </TouchableOpacity>
              <Box gap={20}>
                {receipts.map((receipt, index) => (
                  <SimpleReceipt
                    key={index}
                    receipt={receipt}
                    navigateToTransaction={() =>
                      navigation.navigate(ROUTER_ROOT.TRANSACTION_SCREEN, {
                        receipt: receipt,
                      })
                    }
                  />
                ))}
              </Box>
            </Box>
          </ScrollView>
        </Background>
      </Box>
    );
  }
);

export default React.memo(ReceiptScreen);
