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
  const {width} = useWindowDimensions();
  return (
    <ImageBackground
      source={require('@src/assets/images/Background.png')}
      resizeMode="contain">
      <Box
        height={310}
        width={width * 0.85}
        flex={1}
        justifyContent="center"
        paddingHorizontal={'6%'}
        paddingTop={'6%'}>
        <Box flex={2} row alignItems="center">
          <Box width="17%">
            <TouchableOpacity style={styles.servicesButton}>
              {icon}
            </TouchableOpacity>
          </Box>

          <Box style={styles.ticketBox}>
            <Text size={16} weight="bold" style={[styles.normalText]}>
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

        <Box flex={3} paddingVertical={10} justifyContent="space-around">
          <Box row alignItems="center">
            <Box flex={1}>
              <Text size={14} color={'grey'}>
                Mã hóa đơn
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={16} color={'black'} textAlign="right">
                {id}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="center">
            <Box flex={1}>
              <Text size={14} color={'grey'}>
                Ngày khởi tạo hóa đơn
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={16} color={'black'} textAlign="right">
                {date}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="center">
            <Box flex={1}>
              <Text size={14} color={'grey'}>
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
                <Text size={14} color={'black'} textAlign="right">
                  {dueDate}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box color="#D4D7DA" height={1} />

        <Box flex={3} paddingVertical={15} justifyContent="space-around">
          <Box flex={2}>
            <Text size={14} color={'grey'}>
              Số tiền cần thanh toán
            </Text>
            {/* Format amount of money with dots */}
            <Text size={16} color={'black'} weight="bold">
              {amount.toLocaleString().replaceAll(',', '.')} VNĐ
            </Text>
          </Box>
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: theme.colors.primary,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text size={16} weight="bold" color={'white'} textAlign="center">
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
