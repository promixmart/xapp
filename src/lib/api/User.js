import {store} from '../../Redux/store';

const login = async (username, password) => {
  try {
    const result = await fetch('https://xorgs.org/api/auth', { //auth.php
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        SERVER_KEY: '440be51423ef127d6263bfd213ecabd5',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    return await result.json();
  } catch (err) {
    return {error: err};
  }
};

const updateProfile = async (name, bio, profile_photo) => {
  const sessionToken = store.getState().auth.currentUser.sessionToken;
  if (!sessionToken) {
    return {error: 'Session token is needed'};
  }
  let result = await fetch(
    'http://10.0.2.2:3306/api/update-user-data',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        SERVER_KEY: '440be51423ef127d6263bfd213ecabd5',
      },
      body: JSON.stringify({
        name: name,
        bio: bio,
        profile_photo: profile_photo,
      }),
    },
  );
  result = await result.json();
  return result.result;
};

const registerNewUser = async (username, email, password, confirm_password, gender) => {
  let result = await fetch(
    'https://xorgs.org/api/create-account', // register_user
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        SERVER_KEY: '440be51423ef127d6263bfd213ecabd5',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        confirm_password: confirm_password,
        gender: gender,
      }),
    },
  );
  result = await result.json();
  return result.result;
};

export const UserApi = {
  login: login,
  updateProfile: updateProfile,
  registerNewUser: registerNewUser,
};
