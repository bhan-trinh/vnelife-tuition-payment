import React from 'react';
import {Box, LinearGradient, Text} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {GradientButton} from '../GradientButton';
import {WalletSvg} from '@src/assets/svgs/WalletSvg';

export const WelcomePanel = () => {
  return (
    <Box style={styles.welcomeBox} alignItems="center">
      {/* <GradientButton
        size={50}
        xml={<WalletSvg width={30} height={30} color="white" />}
      /> */}
      <Box radius={8} padding={8} overflow="hidden">
        <WalletSvg width={30} height={30} color="white" />

        <Box style={StyleSheet.absoluteFillObject} zIndex={-1}>
          <LinearGradient
            angle={-45}
            colorList={[
              {color: '#65FDF0', offset: '0%', opacity: '1'},
              {color: '#1D6FA3', offset: '100%', opacity: '1'},
            ]}
          />
        </Box>
      </Box>
      <Box style={styles.welcomeTextBox}>
        <Text size={10} style={styles.normalText}>
          Chào mừng bạn đến với
        </Text>
        <Text size={16} weight="bold" style={[styles.normalText]}>
          Thanh toán trực tuyến
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
    paddingHorizontal: '7%',
    paddingVertical: '10%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

  welcomeBox: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  welcomeTextBox: {
    width: '62%',
  },

  normalText: {
    color: 'black',
    fontFamily: 'Inter',
  },
});
