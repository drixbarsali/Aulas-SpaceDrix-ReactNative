import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Login from './Containers/Login';
import Register from './Containers/Register';
import Home from './Containers/Home';
import MinhaAgenda from './Containers/MinhaAgenda';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuHome = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => (
          <Icon name="alert-triangle" size={20} color="black" />
        ),
      }}
    />
    <Tab.Screen name="MinhaAgenda" component={MinhaAgenda} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MenuHome" component={MenuHome} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
