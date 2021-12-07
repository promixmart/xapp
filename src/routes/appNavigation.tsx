import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LeftDrawer, TabNavigation, SignScreens} from '.';
import {ThemeContext} from '../context/themeSwichContext';
import DefaultTheme from '../constants/default-theme';
import DarkTheme from '../constants/dark-theme';
import {ChatScreen} from '../screens/chat';
import {SearchScreen} from '../screens/search';
import {PostScreen} from '../screens/post';
import {Xassist} from '../screens/Xassist';
import ltheme from '../constants/ltheme';

export type StackList = {
  Chat: undefined;
  PostScreen: undefined;
  Search: undefined;
  SignModal: undefined;
  User: undefined;
  Xassist: undefined;
  App: undefined;
  Tab: undefined;
  Home: undefined;
};
const AppStack = createStackNavigator<StackList>();
const Drawer = createDrawerNavigator<StackList>();

function AppStackNavigation() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animationEnabled: true,
      }}>
      <AppStack.Screen name={'Tab'} component={TabNavigation} />
      <AppStack.Screen name={'Chat'} component={ChatScreen} />
      <AppStack.Screen name={'PostScreen'} component={PostScreen} />
      <AppStack.Screen name={'Search'} component={SearchScreen} />
      <AppStack.Screen name={'Xassist'} component={Xassist} />
    </AppStack.Navigator>
  );
}

function AppScreen() {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const {theme} = React.useContext(ThemeContext);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <StatusBar
        backgroundColor={ltheme.colors.light}
        barStyle={'dark-content'}
      />
      <Drawer.Navigator
        drawerContent={props => <LeftDrawer {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="SignModal" component={SignScreens} />
        <Drawer.Screen name="Home" component={AppStackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppScreen;
