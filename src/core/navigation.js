import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Devices from '../screens/devices'
import Users from '../screens/users'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName

            if (route.name === 'Devices') {
              iconName = 'devices'
            } else if (route.name === 'Users') {
              iconName = 'person'
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
