import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import articleReducer from './reducer/articleReducer';

export default () => {
   const store = createStore(
      userReducer,
      applyMiddleware(reduxThunk)
   );

   return store;
};