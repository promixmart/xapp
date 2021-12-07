import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNav} from '.';
import UserScreen from '../screens/Account/User';
import {ProductListNavigator} from '.';
import {NotificationScreen} from '../screens/notification';
import {PostScreen} from '../screens/post';
import {Host} from 'react-native-portalize';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Host>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          animationEnabled: true,
        }}>
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="My Shop" component={ProductListNavigator} />
        <Tab.Screen name="CreatePost" component={PostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </Host>
  );
};
