import React, { useState, createContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LentOwedScreen from '../screens/LentOwedScreen'
import UpcommingScreen from '../screens/UpcommingScreen'
import CalendarScreen from '../screens/CalendarScreen'
import TodoScreen from '../screens/TodoScreen'

const Tab = createBottomTabNavigator()
export const FinancialsContext = createContext()

const InfoNavigator = () => {
   const [modalCueWhatList, setModalCueWhatList] = useState()
   const [infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen] = useState()
   const infoNavigatorScreenNames = {
      LentOwed: "LentOwed",
      upcomming: 'upcomming',
      calendar: 'calendar',
      todoList: 'todoList'
   }

   return (
      <FinancialsContext.Provider value={{ modalCueWhatList, setModalCueWhatList, infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen }}>
         <Tab.Navigator>
            <Tab.Screen name={infoNavigatorScreenNames.LentOwed} component={LentOwedScreen} />
            <Tab.Screen name={infoNavigatorScreenNames.todoList} component={TodoScreen} />
         </Tab.Navigator>
      </FinancialsContext.Provider>
   )
}

export default InfoNavigator
