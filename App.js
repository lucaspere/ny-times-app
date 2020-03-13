import React, { useState } from 'react';
import { Provider } from 'react-redux';

import storeConfig from './src/redux/storeConfig';

import RootStacks from './src/routers/RootStacks';

const store = storeConfig();

store.subscribe(() => console.log(store.getState()))
const App = () => {
  return (
    <Provider store={store}>
      <RootStacks />
    </Provider>
  );
}

export default App;
