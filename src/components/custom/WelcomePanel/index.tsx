import React from 'react';
import {Box, LinearGradient, Text} from '@src/components/core';
import {StyleSheet} from 'react-native';
import {WalletSvg} from '@src/assets/svgs/WalletSvg';
import {size} from '@src/utils/styles/size';
import {theme} from '@src/assets/themes/theme';
import {BookSvg} from '@src/assets/svgs/BookSvg';

export const WelcomePanel = () => {
  return (
    <Box style={styles.welcomeBox} alignItems="center">
      {/* <GradientButton
        size={50}
        xml={<WalletSvg width={30} height={30} color="white" />}
      /> */}
      <Box radius={8} padding={8} overflow="hidden">
        <BookSvg width={30} height={30} color="white" />

        <Box style={StyleSheet.absoluteFillObject} zIndex={-1}>
          <LinearGradient
            angle={-45}
            colorList={[
              {color: theme.colors.highlight2, offset: '0%', opacity: '1'},
              {color: theme.colors.highlight1, offset: '100%', opacity: '1'},
            ]}
          />
        </Box>
      </Box>
      <Box style={styles.welcomeTextBox}>
        <Text size={size.s} style={styles.normalText}>
          Chào mừng bạn đến với
        </Text>
        <Text size={size.xl} weight="bold" style={[styles.normalText]}>
          Thanh toán học phí
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
    width: '80%',
  },

  normalText: {
    color: 'black',
    fontFamily: 'Inter',
  },
});
