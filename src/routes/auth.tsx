import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignModal, SignUpScreen, SignInScreen} from '../screens/auth';

export type AuthStackList = {
  SignModal: undefined;
  SignUp: undefined;
  SignIn: undefined;
};
const Stack = createStackNavigator<AuthStackList>();

export default () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      defaultScreenOptions={{
        initialRouteName: 'SignModal',
      }}>
      <Stack.Screen name="SignModal" component={SignModal} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
};
