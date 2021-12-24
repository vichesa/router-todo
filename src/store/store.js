import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import storage from 'redux-persist/lib/storage';
// import { persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PAUSE,
  PERSIST,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer, { todoAdapter } from './todoSlice';

// const store = configureStore({
//   reducer: { todos: todoReducer },
// });

// export default store;
