// import AsyncStorage from '@react-native-community/async-storage';
import {combinedReducers} from 'reducers/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/rootSaga';
import array from './array';
import promise from './promise';
import whitelist from './whitelist';
import {reduxStorage} from 'helpers/secureStorage';

const persistConfig = {
  timeout: 15000,
  whitelist,
  key: 'root',
  storage: reduxStorage,
};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middlewares, ...[sagaMiddleware, promise, array]),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store, {}, () => {
  return store;
});
