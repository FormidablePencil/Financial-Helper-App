import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons'
import { FinancialsContext } from '../navigators/InfoNavigator'


export const MyList = ({ list, listName }) => {
   const { modalCue, setmodalCue } = useContext(FinancialsContext)
   const onPressHandlerCreate = (listName) => {
      if (listName === 'lent') {
         setmodalCue('firstList')
      } else if (listName === 'owed') {
         setmodalCue('secondList')
      }
   }
   const onPressHandlerEdit = (id, listName) => {

   }
   return (
      <View>
         {/* {list.map(item =>
            <View>
               <Feather name='edit-3' size={30} onPress={() => onPressHandlerEdit(item.id, listName)} />
               <Text>amount: {item.amount}</Text>
               <Text>entity: {item.entity}</Text>
               <MaterialIcons name='delete' size={50} onPress={() => onPressHandlerEdit(item.id, listName)} />
            </View>
         )} */}
         <Text>{listName}</Text>
         <AntDesign name='plussquareo' size={40} onPress={() => onPressHandlerCreate(listName)} />
      </View>
   )
}

export default MyList