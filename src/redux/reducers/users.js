const initialState = {
  users: [],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
