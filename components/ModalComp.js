import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Modal, Button } from 'react-native'
import ModalBg, { ModalCard, TextInput } from '../styles/stylesGlobal'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { FinancialsContext } from '../navigators/InfoNavigator'
import { ADD_TO_OWE_LIST, ADD_TO_LENT_LIST } from '../actions/types'
import { actionSaveListAccordingly } from '../actions/actions'

//~ made this component reusable in any screen within infoNavigator
const ModalComp = ({ }) => {
   const { modalCue, setmodalCue, infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen } = useContext(FinancialsContext)
   const [firstList, setfirstList] = useState({ item1: '', item2: '' })
   const [secondList, setsecondList] = useState({ item1: '', item2: '' })
   const [thirdList, setthirdList] = useState({ item1: '', item2: '' })
   const [inputValue, setinputValue] = useState()

   useEffect(() => {
      setinfoNavigatorCurrentScreen('lentBorrowed')
      if (modalCue === 'firstList') { setinputValue(firstList) }
      else if (modalCue === 'secondList') { setinputValue(secondList) }
   })

   const onChangeHandler = (typed, whatInputField) => {
      if (modalCue === 'firstList') {
         setfirstList({ ...firstList, [whatInputField]: typed })
      } else if (modalCue === 'secondList') {
         setsecondList({ ...secondList, [whatInputField]: typed })
      } else if (modalCue === 'thirdList') {
         setthirdList({ ...thirdList, [whatInputField]: typed })
      }
      // setlistsState({
      //    ...listsState, [modalCue]:
      //    {
      //       ...listsState[modalCue], [whatInputField]: typed
      //    }
      // })
   }
   const closeOnPressHandler = (id, whatList) => {
      setmodalCue()
   }
   const dispatch = useDispatch()

   const submitOnPress = () => {

      if (modalCue === 'firstList') {
         dispatch(actionSaveListAccordingly(firstList, modalCue, infoNavigatorCurrentScreen))
      } else if (modalCue === 'secondList') {
         dispatch(actionSaveListAccordingly(secondList, modalCue, infoNavigatorCurrentScreen))
      } else if (modalCue === 'thirdList') {
         dispatch(actionSaveListAccordingly(thirdList, modalCue, infoNavigatorCurrentScreen))
      }
      resetAllListStates()
   }

   const resetAllListStates = () => {
      setmodalCue({ item1: '', item2: '' })
      setfirstList({ item1: '', item2: '' })
      setsecondList({ item1: '', item2: '' })
      setthirdList({ item1: '', item2: '' })
   }

   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={typeof modalCue === 'string' ? true : false}
      >
         <ModalBg>
            <ModalCard>
               <MaterialIcons name='close' size={50} onPress={closeOnPressHandler} submitOnPress={submitOnPress} />
               <ModalContentComp onChangeHandler={onChangeHandler} submitOnPress={submitOnPress} list={firstList} firstList={firstList} secondList={secondList} thirdList={thirdList} />
            </ModalCard>
         </ModalBg>
      </Modal>

   )
}

//~ depending on what screen this is used will render differently
const ModalContentComp = ({ onChangeHandler, firstList, secondList, thirdList, submitOnPress }) => {

   const { infoNavigatorCurrentScreen, modalCue } = useContext(FinancialsContext)
   if (infoNavigatorCurrentScreen === 'lentBorrowed') {
      return (
         <View>
            <TextInputsComp onChangeHandler={onChangeHandler} item={'item1'} placeholder={'amount'} firstList={firstList} secondList={secondList} thirdList={thirdList} />
            <TextInputsComp onChangeHandler={onChangeHandler} item={'item2'} placeholder={'toEntity'} firstList={firstList} secondList={secondList} thirdList={thirdList} />
            <Text>{modalCue}, {}</Text>
            <Button title='submit' onPress={() => submitOnPress()} />
         </View>
      )
   } else if (modalTheme === 'someother') {
      return (
         <View>
            <Text>other screens will have more or less list states and every screens modal will look and feel differently</Text>
         </View>
      )
   }
}


//~ depending on how many lists used will redner differently
const TextInputsComp = ({ onChangeHandler, placeholder, item, firstList, secondList, thirdList }) => {
   const { modalCue, setmodalCue } = useContext(FinancialsContext)

   if (modalCue === 'firstList') {
      return (
         <TextInput onChangeText={typed => onChangeHandler(typed, item)} placeholder={placeholder} value={firstList[item]} />
      )
   } else if (modalCue === 'secondList') {
      return (
         <TextInput onChangeText={typed => onChangeHandler(typed, item)} placeholder={placeholder} value={secondList[item]} />
      )
   } else if (modalCue === 'thirdList') {
      return (
         <TextInput onChangeText={typed => onChangeHandler(typed, item)} placeholder={placeholder} value={thirdList[item]} />
      )
   }
}


export default ModalComp
