import axios from 'axios';

axios.defaults.baseURL = 'https://6191a09a41928b00176900d3.mockapi.io/users';

const limit = 3;

export async function fetchUsersAPI(page) {
  const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
  return data;
}

export async function updUserAPI(newData) {
  await axios.put(`/users/${newData.id}`, newData);
}
