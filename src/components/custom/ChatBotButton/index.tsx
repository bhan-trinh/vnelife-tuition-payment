import ChatBotSvg from '@src/assets/svgs/ChatBotSvg';
import {Box, LinearGradient} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const ChatBotButton = () => {
  return (
    <TouchableOpacity>
      <Box center middle bottom={30} right={30} position="absolute">
        <Box
          radius={100}
          padding={8}
          overflow="hidden"
          position="absolute"
          center
          middle
          width={78}
          height={78}>
          <Box style={StyleSheet.absoluteFillObject} zIndex={-1}>
            <LinearGradient
              angle={-45}
              colorList={[
                {color: '#1274FE', offset: '0%', opacity: '0.3'},
                {color: '#10C8CB', offset: '100%', opacity: '0.3'},
              ]}
            />
          </Box>
        </Box>
        <Box
          radius={100}
          padding={8}
          overflow="hidden"
          position="absolute"
          center
          middle
          width={66}
          height={66}>
          <Box style={StyleSheet.absoluteFillObject} zIndex={-1}>
            <LinearGradient
              angle={-45}
              colorList={[
                {color: '#1274FE', offset: '0%', opacity: '0.5'},
                {color: '#10C8CB', offset: '100%', opacity: '0.5'},
              ]}
            />
          </Box>
        </Box>
        <Box
          radius={100}
          padding={8}
          overflow="hidden"
          center
          middle
          width={52}
          height={52}>
          <ChatBotSvg width={36} height={36} color="white" />
          <Box style={StyleSheet.absoluteFillObject} zIndex={-1}>
            <LinearGradient
              angle={-45}
              colorList={[
                {color: '#1274FE', offset: '10%', opacity: '1'},
                {color: '#10C8CB', offset: '100%', opacity: '1'},
              ]}
            />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
