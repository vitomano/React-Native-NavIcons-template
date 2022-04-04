import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { Text, View } from 'react-native'
import { StackNavigation } from './src/navigation/StackNavigation';



const App = () => {
  return (

    <NavigationContainer>

      <StackNavigation />
    </NavigationContainer>

  )
}

export default App