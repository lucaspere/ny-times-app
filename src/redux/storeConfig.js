import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import articleReducer from './reducer/articleReducer';

export default () => {
   const store = createStore(
      articleReducer,
      applyMiddleware(reduxThunk)
   );

   return store;
};