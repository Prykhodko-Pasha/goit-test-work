import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as actions from './actions';
import { fetchUsers, updUser } from './operations';

const entities = createReducer([], {
  [fetchUsers.fulfilled]: (_, action) => action.payload,
  [updUser.fulfilled]: (state, { payload }) => [...state, payload],
});

const isLoading = createReducer(false, {
  [fetchUsers.pending]: () => true,
  [fetchUsers.fulfilled]: () => false,
  [fetchUsers.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchUsers.rejected]: (_, action) => action.payload,
  [fetchUsers.pending]: () => null,
  [updUser.rejected]: (_, action) => action.payload,
  [updUser.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  // filter,
  error,
});
