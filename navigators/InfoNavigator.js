import React, { useState, createContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LentBorrowedScreen from '../screens/LentOwedScreen'
import UpcommingScreen from '../screens/UpcommingScreen'
import CalendarScreen from '../screens/CalendarScreen'

const Tab = createBottomTabNavigator()
export const FinancialsContext = createContext()

const InfoNavigator = () => {
   const [modalCue, setmodalCue] = useState()
   const [infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen] = useState()
   const infoNavigatorScreenNames = {
      lentBorrowed: "lentBorrowed",
      upcomming: 'upcomming',
      calendar: 'calendar'
   }

   return (
      <FinancialsContext.Provider value={{ modalCue, setmodalCue, infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen }}>
         <Tab.Navigator>
            <Tab.Screen name={infoNavigatorScreenNames.lentBorrowed} component={LentBorrowedScreen} />
            <Tab.Screen name={infoNavigatorScreenNames.upcomming} component={UpcommingScreen} />
            <Tab.Screen name={infoNavigatorScreenNames.calendar} component={CalendarScreen} />
         </Tab.Navigator>
      </FinancialsContext.Provider>
   )
}

export default InfoNavigator
