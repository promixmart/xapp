/* eslint-disable react-native/no-inline-styles */
import React from 'react';
//import {LogBox} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {store, persistor} from './Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProviders} from './context/themeSwichContext';
import ltheme from './constants/ltheme';
import {AuthProvider} from './context/authContext';
import {ThemeProvider} from '@shopify/restyle';
import {AppScreen} from './routes';
if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';
  //LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  //LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={ltheme}>
              <AuthProvider>
                <ThemeProviders>
                  <AppScreen />
                </ThemeProviders>
              </AuthProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;
