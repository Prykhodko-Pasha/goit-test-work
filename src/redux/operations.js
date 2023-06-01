import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './actions';
import { fetchUsersAPI, updUserAPI } from '../services/users-api';

export const fetchUsers = createAsyncThunk(actions.fetchUsers, async () => {
  const users = await fetchUsersAPI();
  return users;
});

export const updUser = createAsyncThunk(actions.updUser, async data => {
  await updUserAPI(data);
});
