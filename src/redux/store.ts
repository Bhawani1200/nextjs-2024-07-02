import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import authReducer from "./auth/authSlice";
import rootReducer from "./rootReducer";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
// const store = configureStore({
//   reducer: {
//     product: productReducer,
//     auth: authReducer,
//   },
// });
const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:['FLUSH','REHYDRATE','PAUSE','PERSIST','PURGE','REGISTER'],
      },
    }),
});
const persistor=persistStore(store);
export { store,persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
