import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/mainScreens/HomeScreen'
import SettingScreen from '../Screens/mainScreens/SettingScreen'
import Routes from './routesNames'
import RoomCardScreen from '../Screens/mainScreens/roomCardScreen/RoomCardScreen'


const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name={Routes.Home} component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name={Routes.Settings} component={SettingScreen} options={{headerShown:false}} /> 
      <Stack.Screen  name={Routes.Housekeeping} component={RoomCardScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default MainStack
