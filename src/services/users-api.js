import axios from 'axios';

axios.defaults.baseURL = 'https://6191a09a41928b00176900d3.mockapi.io/users';

export async function fetchUsersAPI() {
  const { data } = await axios.get('/users');
  return data;
}

export async function updUserAPI(newData) {
  await axios.put(`/users/${newData.id}`, newData);
}
