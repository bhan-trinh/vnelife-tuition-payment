import React, {useContext} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Host} from 'react-native-portalize';
import Navigator from '@src/navigation';
// import Icon from '@react-native-vector-icons/material-design-icons';
import {PaperProvider} from 'react-native-paper';
import LoadingPortal from '@src/components/custom/LoadingPotal';
import {EventsBusServiceManager} from 'vnpt-mini-api';
import {UserProvider, useUser} from '@src/contexts/user';
import {getToken} from '@src/api/core';

const App = (props: any) => {
  if (__DEV__) {
    EventsBusServiceManager.getInstance().runService();
  } else {
    console.log('Props get from host app:', props);
    EventsBusServiceManager.setInstance(props.service);
  }

  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <PaperProvider>
          <GestureHandlerRootView>
            <Host>
              <UserProvider>
                <Navigator />
              </UserProvider>
            </Host>
            <LoadingPortal />
          </GestureHandlerRootView>
        </PaperProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
};

export default App;
