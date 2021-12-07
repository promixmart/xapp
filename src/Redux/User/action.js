export const TYPE_ADD_USER = 'TYPE_ADD_USER';
export const TYPE_SUBSCRIBE_TOGGLE = 'TYPE_SUBSCRIBE_TOGGLE';

export const addUser = user => {
  return {
    type: TYPE_ADD_USER,
    payload: [user],
  };
};

export const addUsers = users => {
  return {
    type: TYPE_ADD_USER,
    payload: users,
  };
};
