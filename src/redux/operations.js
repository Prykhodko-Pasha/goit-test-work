import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './actions';
import { fetchUsersAPI, updUserAPI } from '../services/users-api';

export const fetchUsers = createAsyncThunk(
  actions.fetchUsers,
  async (page = 1) => {
    const users = await fetchUsersAPI(page);
    return users;
  },
);

export const updUser = createAsyncThunk(actions.updUser, async data => {
  await updUserAPI(data);
});
