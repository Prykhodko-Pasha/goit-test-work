// import { createSelector } from '@reduxjs/toolkit';

export const getEntities = state => state.users.entities;
export const getLoading = state => state.users.isLoadingUsers;
export const getUpdFollowers = state => state.users.isUpdFollowers;
