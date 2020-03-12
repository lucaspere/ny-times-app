import {createStore} from 'redux';

import articleReducer from './reducer/articleReducer';

export const store = createStore(articleReducer);