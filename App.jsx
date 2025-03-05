import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Missing import in your code

// Import your navigation components
import BottomNavigation from './src/Navigation/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;