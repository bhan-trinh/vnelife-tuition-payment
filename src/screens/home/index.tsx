import React, {useCallback, useContext, useEffect, useState} from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {ReceiptPanel} from '@src/components/custom/ReceiptPanel';
import {receiptList} from '@src/data/receipt/receiptList';
import {ChatBotButton} from '@src/components/custom/ChatBotButton';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {Background} from '@src/components/custom/Background/Background';
import {tuitionServiceList} from '@src/data/service/tuitionServiceList';
import {size} from '@src/utils/styles/size';
import {IconBox} from '@src/components/custom/IconBox';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {UserContext} from '@src/contexts/user';
import {fetchAllReceiptsByUserId, getToken} from '@src/api/api-hp/core';
import {addService, getData, storeData} from '@src/api/async-storage';
import {ReceiptContext} from '@src/contexts/receipt';
import {useFocusEffect} from '@react-navigation/native';

export interface HomeScreenProps extends RootStackScreenProps<'HOME_SCREEN'> {}
export type HomeScreenRef = {};
const HomeScreen = React.forwardRef<HomeScreenRef, HomeScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    const {receipts, setReceipts} = useContext(ReceiptContext);
    const [recentSearch, setRecentSearch] = useState([]);

    // Get user token when open app
    useEffect(() => {
      const fetchToken = async () => {
        const res = await getToken('test6', 'abc');
        if (Object.keys(res).includes('token'))
          await storeData('token', res.token);
        else console.log("Couldn't find user token");
      };
      fetchToken();
    }, []);

    // Get all receipts & recent searches when open home screen
    useFocusEffect(
      React.useCallback(() => {
        // Fetch receipts
        const fetchReceipts = async () => {
          try {
            const res = await fetchAllReceiptsByUserId();
            setReceipts(res);
          } catch (err) {
            console.log(err);
          }
        };

        // Fetch searches
        const fetchSearched = async () => {
          try {
            const res = await getData('searchedService');
            console.log(res);
            const data = res ? res : [];
            setRecentSearch(data.reverse());
          } catch (err) {}
        };

        fetchReceipts();
        fetchSearched();

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
              paddingVertical={50}
              justifyContent="space-around"
              color="transparent"
              style={{gap: 15}}>
              <WelcomePanel />

              <ReceiptPanel
                receiptList={receipts}
                navigate={() => navigation.navigate(ROUTER_ROOT.RECEIPT_SCREEN)}
              />

              <Box color="#F2F2F2" height={8} marginHorizontal={-15} />

              <Box>
                {/* Show recent searches */}
                <Text size={size.xl} color={'black'} weight="bold">
                  Sử dụng gần đây
                </Text>

                <Box flex={1} row wrap="wrap">
                  {recentSearch.map((key, index: number) => {
                    var element =
                      tuitionServiceList[
                        key as keyof typeof tuitionServiceList
                      ];
                    return (
                      <IconBox
                        key={index}
                        icon={
                          tuitionServiceImages[
                            element.icon as keyof typeof tuitionServiceImages
                          ]
                        }
                        notif={null}
                        title={element.title}
                        onPress={() => {
                          navigation.navigate(ROUTER_ROOT.LOOKUP_SCREEN, {
                            service: element.icon,
                          });
                          addService(key);
                        }}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Background>
        <ChatBotButton />
      </Box>
    );
  }
);

export default HomeScreen;
