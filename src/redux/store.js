import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

export const server="https://course-bundler-backend-xmgo.onrender.com/api/v1"

const store = configureStore({
  reducer: {
    user:userReducer,
    profile:profileReducer,
    course:courseReducer
  },
});

export default store;
