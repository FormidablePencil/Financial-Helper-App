import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View } from 'react-native';
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InfoNavigator from './navigators/InfoNavigator';
import LoadingScreen from './screens/LoadingScreen';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()
const Stack = createStackNavigator()

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({

      })
      setFontLoaded(true)
    }
    loadFonts()
  }, [])

  return (
    <Provider store={store}>
      <View style={{ height: getStatusBarHeight(), backgroundColor: 'black' }} />
      <NavigationContainer>
        <Stack.Navigator>
          {fontLoaded ?
            <Stack.Screen options={{ headerShown: false }} name='Main' component={InfoNavigator} />
            : <Stack.Screen name='loading' component={LoadingScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
