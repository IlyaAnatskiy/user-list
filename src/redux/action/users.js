import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
  axios.get('http://localhost:3001/users').then(({ data }) => dispatch(addUsers(data)));
};

export const fetchAddUser = (user) => (dispatch) => {
  axios.post('http://localhost:3001/users', { ...user });
};

export const addUsers = (payload) => ({
  type: 'ADD_USERS',
  payload,
});
