// import { createSelector } from '@reduxjs/toolkit';

export const getEntities = state => state.users.entities;
// export const getFilter = state => state.users.filter;
export const getLoading = state => state.users.isLoading;
// export const getVisibleUsers = createSelector(
//   [getEntities, getFilter],
//   (items, filter) =>
//     items.filter(item => item.name.toLowerCase().includes(filter)),
// );
