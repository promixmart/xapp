import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import UserScreen from '../screens/Account/User';

const Tab = createStackNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
