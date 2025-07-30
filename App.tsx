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
import {getToken} from '@src/api/api-hp/core';
import {ReceiptProvider} from '@src/contexts/receipt';
import {StripeProvider} from '@stripe/stripe-react-native';

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
              <StripeProvider
                publishableKey={
                  'pk_test_51Rq53WBicnVx2gWhMY4bb0mL68mI4Yti7DSRuKCCv1MXpXYQd2FeeECOoD1K93pDhYv8pCFYagOgDuswitUMGvAD003QzxoA9O'
                }>
                <ReceiptProvider>
                  <Navigator />
                </ReceiptProvider>
              </StripeProvider>
            </Host>
            <LoadingPortal />
          </GestureHandlerRootView>
        </PaperProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
};

export default App;
