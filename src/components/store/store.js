import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../contactsSlice/contactsSlice';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = {
  contacts: persistReducer(persistConfig, contactsReducer),
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
