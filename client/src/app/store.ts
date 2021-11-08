import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { blogApi } from '../features/blog/blogApi';
// import blogReducer from '../features/blog/blogSlice';

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    // blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


setupListeners(store.dispatch)