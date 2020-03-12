import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import storeConfig from './src/redux/storeConfig';

import Feed from './src/components/Feed';

const store = storeConfig();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Feed />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
