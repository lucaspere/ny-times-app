import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import storeConfig from './src/redux/storeConfig';

import Feed from './src/components/Feed';

import RootStacks from './src/routers/RootStacks';

const store = storeConfig();

const App = () => {
  return (
    <Provider store={store}>
      <RootStacks />
    </Provider>
  );
}

export default App;
