import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';

export const server="https://course-bundler-backend-xmgo.onrender.com/api/v1"

const store = configureStore({
  reducer: {
    user:userReducer,
    profile:profileReducer
  },
});

export default store;