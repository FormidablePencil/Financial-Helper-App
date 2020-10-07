import React, { useContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons'
import { FinancialsContext } from '../navigators/InfoNavigator'
import { ItemInCollection, MyListContainer, IndividualItem, Col, TitleContainer, Title, TextInput } from '../styles/stylesGlobal'
import { useDispatch } from 'react-redux'
import { actionDeleteItemFromCertainCollection, actionEditSpecificItem } from '../actions/actions'

//@~ commit this to bit
//* this comp is highly reusable 
export const MyList = ({ collection, collectionName, inputValueSchema }) => {
   const { setModalCueWhatList } = useContext(FinancialsContext)
   const [inputValues, setinputValue] = useState({ typed: '', id: '', whatField: '' })
   const dispatch = useDispatch()


   const resetInputValue = () => {
      setinputValue({ typed: '', id: '', whatField: '' })
   }
   const onPressHandlerCreate = () => {
      setModalCueWhatList(collectionName)
   }
   const submitChangesOnBlur = async () => {
      await dispatch(actionEditSpecificItem({ collectionName, inputValues }))
      resetInputValue()
   }
   const updateinputValueOnChangeHandler = ({ typed, id, whatField }) => {
      setinputValue({ typed, id, whatField }) 
   }
   const deleteItem = ({ id }) => {
      dispatch(actionDeleteItemFromCertainCollection({ id, collectionName }))
   }
   return (
      <ItemInCollection>
         <TitleContainer>
            <Title>{collectionName}</Title>
         </TitleContainer>
         {collection.map(cluster => {
            return (
               <IndividualItem key={cluster.id}>
                  <Col>
                     <MaterialIcons name='delete' size={30} onPress={() => deleteItem({ id: cluster.id })} />
                  </Col>
                  {Object.keys(inputValueSchema).map((whatField, index) => {
                     return (
                        <View key={index}>
                           <Text>{whatField}:</Text>
                           < TextInput
                              onChange={event => updateinputValueOnChangeHandler({ typed: event.nativeEvent.text, whatField, id: cluster.id })}
                              onBlur={() => submitChangesOnBlur()}
                              placeholder={whatField}
                              value={cluster.id === inputValues.id && whatField === inputValues.whatField ? inputValues.typed : cluster[whatField]} />
                        </View>
                     )
                  })}
               </IndividualItem>
            )
         })}

         <AntDesign name='plussquareo' size={40} onPress={() => onPressHandlerCreate(collectionName)} />
      </ItemInCollection>
   )
}

export default MyList

//@ add options set a due date for when and do date. 
//@ add when & due date and refractor the states, thus the whole file 
//@ create a upcomming page due dates for todo and lend and owed.
//@ we got to create an action and reducer for when & due data. All the logic is set up so we'll essentially compy and paste and only modify a few values

//* animation and design will be after all the programming and when I'm animating.