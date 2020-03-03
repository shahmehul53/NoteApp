import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="ViewNotes" component={ViewNotes} />
        <Stack.Screen name="AddNotes" component={AddNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
