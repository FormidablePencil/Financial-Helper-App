import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons'
import { FinancialsContext } from '../navigators/InfoNavigator'
import { ItemInCollection, MyListContainer, IndividualItem, Col, TitleContainer, Title, TextInput } from '../styles/stylesGlobal'
import { useDispatch } from 'react-redux'

//~ this comp should be reusable
export const MyList = ({ list, listName }) => {
   const { modalCue, setmodalCue } = useContext(FinancialsContext)
   const [editedItem, seteditedItem] = useState()
   const dispatch = useDispatch()

   const onPressHandlerCreate = (listName) => {
      if (listName === 'lent') {
         setmodalCue('firstList')
      } else if (listName === 'owed') {
         setmodalCue('secondList')
      }
   }

   const submitChangesOnPress = (id) => {
      useDispatch(actionEditSpecificItem({id, listName, editedItem})) 
      console.log('Submited changes')
   }

   const editedItemOnChangeHandler = (typed) => {
      seteditedItem(typed)
   }
   
   
   const deleteItem = (id, listName) => {
      if (listName === 'lent') {
         dispatch({ type: DELETE_SPECIFIC_ITEM_IN_LENT, payload: id })
      } else if (listName === 'lent') {
         dispatch({ type: DELETE_SPECIFIC_ITEM_IN_OWED, payload: id })
         console.log('delete')
      }
   }


   console.log(list)
   return (
      <ItemInCollection>
         <TitleContainer>
            <Title>{listName}</Title>
         </TitleContainer>
         {list.map(item =>
            <IndividualItem key={item.id}>
               <Col>
                  <AntDesign name='save' sise={30} onPress={() => submitChangesOnPress(item.id)} />
                  <Feather name='edit-3' size={30} onPress={(userTyped) => tggglsq___()} />
                  {toggleEditText ? 
                  <TextInput editedItemOnChangeHandler  onPress={(userTyped) => editedItemOnChangeHandler(userTyped)} />
                  }
                  <MaterialIcons name='delete' size={30} onPress={() => deleteItem(item.id, listName)} />
               </Col>
               <Text>amount: {item.amount}</Text>
               <Text>to whom: {item.toEntity}</Text>
            </IndividualItem>
         )}
         <AntDesign name='plussquareo' size={40} onPress={() => onPressHandlerCreate(listName)} />
      </ItemInCollection>
   )
}

export default MyList

//~ will replace the delete and edit option with a slide 
//~ animation and design will be after all the programming and when I'm animating.