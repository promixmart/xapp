import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/home/home';
import PostDetail from '../screens/home/PostDetail';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({route}) => ({
          headerTitle: route.params.category,
          headerStyle: {height: 40},
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitleAlign: 'center',
        })}
      />
    </HomeStack.Navigator>
  );
};
