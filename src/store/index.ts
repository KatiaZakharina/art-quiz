import { combineReducers } from '@reduxjs/toolkit';

import { mainReducer } from 'store/main/reducer';

export const rootReducer = combineReducers({
  mainReducer,
});
