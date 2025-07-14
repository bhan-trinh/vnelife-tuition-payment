import React, {ReactNode} from 'react';
import {Box, Text} from '@src/components/core';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Svg, {Line} from 'react-native-svg';
import {ClockOutlineSvg} from '@src/assets/svgs/ClockOutlineSvg';
import {size} from '@src/common/styles/size';

interface ReceiptProps {
  icon: ReactNode;
  title: string;
  id: string;
  date: string;
  dueDate: string;
  amount: number;
}

export const Receipt: React.FC<ReceiptProps> = ({
  icon,
  title,
  id,
  date,
  dueDate,
  amount,
}) => {
  const theme = useTheme();
  const {height, width} = useWindowDimensions();
  return (
    <ImageBackground
      source={require('@src/assets/images/Background.png')}
      resizeMode="contain">
      <Box
        top={5}
        height={310}
        width={width * 0.85}
        flex={1}
        justifyContent="flex-start"
        paddingHorizontal={'6%'}
        paddingVertical={'3%'}
        borderWidth={1}
        borderColor={'#00000000'}>
        <Box row alignItems="center">
          <Box width="17%">
            <TouchableOpacity style={styles.servicesButton}>
              {icon}
            </TouchableOpacity>
          </Box>

          <Box style={styles.ticketBox}>
            <Text size={size.l} weight="bold" style={[styles.normalText]}>
              {title}
            </Text>
          </Box>
        </Box>

        <Svg height="10" width={width * 0.8} style={{marginLeft: '3%'}}>
          <Line
            x1="0"
            y1="5"
            x2={width * 0.7}
            y2="5"
            stroke="#D4D7DA"
            strokeWidth="1"
            strokeDasharray="5, 5" // Defines dash and gap lengths
          />
        </Svg>

        {/* THÔNG TIN HOÁ ĐƠN ------------------------------------------*/}
        <Box
          paddingVertical={10}
          justifyContent="space-around"
          borderColor={'#00000000'}
          borderWidth={1}>
          <Box row alignItems="center">
            <Box flex={1}>
              <Text size={size.m} color={'grey'}>
                Mã hóa đơn
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {id}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="center">
            <Box flex={1}>
              <Text size={size.m} color={'grey'}>
                Ngày khởi tạo hóa đơn
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {date}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="center" borderColor={'black'}>
            <Box flex={1}>
              <Text size={size.m} color={'grey'}>
                Hạn thanh toán
              </Text>
            </Box>

            <Box justifyContent="flex-end">
              <Box
                borderColor="#DDD"
                borderWidth={1}
                color="#F2F2F2"
                paddingVertical={2}
                paddingHorizontal={10}
                middle
                center
                row
                radius={20}
                style={{gap: 5}}>
                <ClockOutlineSvg width={20} height={20} color="grey" />
                <Text size={size.m} color={'black'} textAlign="right">
                  {dueDate}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          borderColor={'red'}
          justifyContent="center"
          // borderWidth={1}
        >
          <Box color="#D4D7DA" height={1} />
        </Box>

        {/* SỐ TIỀN HOÁ ĐƠN ------------------------------------------*/}

        <Box
          justifyContent="space-around"
          padding={5}
          flex={1}
          borderColor={'#00000000'}
          borderWidth={1}>
          <Box>
            <Text size={size.m} color={'grey'}>
              Số tiền cần thanh toán
            </Text>
            {/* Format amount of money with dots */}
            <Text size={size.l} color={'black'} weight="bold">
              {amount.toLocaleString().replaceAll(',', '.')} VNĐ
            </Text>
          </Box>
          <TouchableOpacity
            style={{
              flex: 1,
              maxHeight: 50,
              backgroundColor: theme.colors.primary,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              size={size.l}
              weight="bold"
              color={'white'}
              textAlign="center">
              Thanh toán
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  normalText: {
    color: 'black',
    fontFamily: 'Inter',
  },

  subText: {
    color: 'grey',
  },

  ticketBox: {
    flex: 1,
  },

  servicesButton: {
    borderRadius: 10000,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
});
