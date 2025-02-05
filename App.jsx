import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/LoginScreen'
import SignUpScreen from './src/SignUpScreen'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
   
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown:false
    }
    }>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignUpScreen}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App