import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';

import Navigation from 'navigators';
import configureStore from 'store/configureStore';

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, httpClient);

const App = () => (
  <>
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  </>
);

export default App;
