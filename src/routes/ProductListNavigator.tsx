import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {MenuAndProductListStackParamList} from '../types/NavigationTypes';
// screens
import Address from '../screens/Shop/Address';
import Cart from '../screens/Shop/Cart';
import Category from '../screens/Shop/Categories';
import Product from '../screens/Shop/Detail';
import ProductList from '../screens/Shop/Shop';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function ProductListNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'ProductList'}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
}
