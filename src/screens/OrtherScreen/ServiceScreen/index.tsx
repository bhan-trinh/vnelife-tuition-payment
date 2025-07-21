import React, {useState} from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import {size} from '@src/common/styles/size';
import {Background} from '@src/components/custom/Background/Background';
import {ServicePanel} from '@src/components/custom/ServicePanel';
import {servicesList} from '@src/data/ServiceButtonsData/servicesList';

export interface ServiceScreenProps
  extends RootStackScreenProps<'SERVICE_SCREEN'> {}
export type ServiceScreenRef = {};
const ServiceScreen = React.forwardRef<ServiceScreenRef, ServiceScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    const {height} = useWindowDimensions();
    const [searchWord, setSearchWord] = useState('');
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
              <ServicePanel servicesList={servicesList} />
            </Box>
          </ScrollView>
        </Background>
      </Box>
    );
  },
);

export default React.memo(ServiceScreen);
