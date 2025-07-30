import React, {useRef, useState} from 'react';
import {RootStackParamList, RootStackScreenProps} from '@src/navigation/types';
import {Box, Input, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {size} from '@src/utils/styles/size';
import {PastTransaction} from '@src/components/custom/PastTransaction';
import {IconBox} from '@src/components/custom/IconBox';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {IconBoxSingle} from '@src/components/custom/IconBoxSingle';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {theme} from '@src/assets/themes/theme';
import {Background} from '@src/components/custom/Background/Background';
import {SERVER_URL} from '../../../../config';
import {ReceiptItem} from '@src/data/receipt/ReceiptItem';
import {StackNavigationProp} from '@react-navigation/stack';
import {Modal, Portal} from 'react-native-paper';
import {fetchReceiptById} from '@src/api/api-hp/core';

export interface LookUpScreenProps
  extends RootStackScreenProps<'LOOKUP_SCREEN'> {}
export type LookUpScreenRef = {};
const LookUpScreen = React.forwardRef<LookUpScreenRef, LookUpScreenProps>(
  (props, _ref) => {
    const {route} = props;
    const {service} = route.params;
    const {height} = useWindowDimensions();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [searchWord, setSearchWord] = useState('');
    const [visible, setVisible] = useState(false);
    const toggleWarning = () => setVisible(!visible);
    const warningText = useRef('Hệ thống đã xảy ra lỗi, vui lòng thử lại sau');
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
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTER_ROOT.BOTTOM_TABS)}>
                <Text size={size.xl} color={'black'} weight="bold">
                  {'<'} Tra cứu dịch vụ
                </Text>
              </TouchableOpacity>
              <Box center middle gap={20}>
                <IconBoxSingle
                  width={200}
                  height={200}
                  elevation={4}
                  icon={
                    tuitionServiceImages[
                      service as keyof typeof tuitionServiceImages
                    ]
                  }
                />
                <Box
                  row
                  radius={45}
                  width={'100%'}
                  borderWidth={1}
                  borderColor="#CCC"
                  paddingHorizontal={14}
                  marginHorizontal={-8}>
                  <Input
                    width={'90%'}
                    placeholder="Mã định danh"
                    size={size.m}
                    color="#999"
                    value={searchWord}
                    onChangeText={text => setSearchWord(text)}
                  />
                  <Box width={'10%'} center middle>
                    <TouchableOpacity onPress={() => setSearchWord('')}>
                      <Text color="black">x</Text>
                    </TouchableOpacity>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Background>

        <Box
          color="white"
          elevation={24}
          height={70}
          bottom={70}
          padding={10}
          gap={10}>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: theme.colors.primary,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={async () => {
              if (searchWord === '') {
                warningText.current = 'Xin hãy nhập mã định danh';
                toggleWarning();
                return;
              }
              try {
                const response = await getReceiptFromApiAsync(searchWord);
                if (Object.keys(response).includes('error')) {
                  warningText.current = response.error;
                  toggleWarning();
                  return;
                }
                navigation.navigate(ROUTER_ROOT.TRANSACTION_SCREEN, {
                  receipt: response,
                });
              } catch (error) {
                console.log(`Look Up Receipt Failed: ${error}`);
                warningText.current =
                  'Hệ thống đã xảy ra lỗi, vui lòng thử lại sau';
              }
            }}>
            <Text
              size={size.l}
              weight="bold"
              color={'white'}
              textAlign="center">
              Tra cứu thông tin
            </Text>
          </TouchableOpacity>
        </Box>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={toggleWarning}
            contentContainerStyle={{
              backgroundColor: 'white',
              padding: 20,
              margin: 20,
              borderRadius: 30,
              alignItems: 'center',
              gap: 6,
            }}>
            <Text size={size.xl}>{warningText.current}</Text>
          </Modal>
        </Portal>
      </Box>
    );
  }
);

export default LookUpScreen;

const getReceiptFromApiAsync = async (billId: string): Promise<any> => {
  try {
    // Look up by bill id
    const response = await fetchReceiptById(billId);
    return response;
  } catch (error) {
    throw `Error while fetching from API: ${error}`;
  }
};
