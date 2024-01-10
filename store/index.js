import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagas from './saga';
import actions from './actions';
import types from './types';
import { assetsSlice } from './assets/assetsSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = {
  [assetsSlice.name]: assetsSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
});

sagaMiddleware.run(sagas);

export { store, actions, types };
