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
import Contatos from './Containers/Contatos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuHome = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Datas"
      component={Home}
      options={{
        headerTransparent: true,
        tabBarIcon: () => <Icon name="book" size={20} color="black" />,
      }}
    />
    <Tab.Screen
      name="MinhaAgenda"
      component={MinhaAgenda}
      options={{
        headerTransparent: true,
        tabBarIcon: () => <Icon name="book-open" size={20} color="black" />,
        title: 'Minha Agenda',
      }}
    />
    <Tab.Screen
      name="Contato"
      component={Contatos}
      options={{
        headerTransparent: true,
        tabBarIcon: () => <Icon name="phone" size={20} color="black" />,
        title: 'Contato',
      }}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="MenuHome"
        component={MenuHome}
        options={{title: 'Datas Disponíveis'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
