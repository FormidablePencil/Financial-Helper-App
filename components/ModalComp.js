import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Modal, Button } from 'react-native'
import ModalBg, { ModalCard, TextInput } from '../styles/stylesGlobal'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { FinancialsContext } from '../navigators/InfoNavigator'
import { ADD_TO_OWED_COLLECTION, ADD_TO_LENT_COLLECTION } from '../actions/types'
import { actionSaveNewCluster } from '../actions/actions'

//@~ commit this to bit
//* made this component reusable in any screen within infoNavigator
const ModalComp = ({ inputValueSchema, modalCueWhatList, setModalCueWhatList }) => {
   const { infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen } = useContext(FinancialsContext)
   const [cluster, setcluster] = useState(inputValueSchema)
   const dispatch = useDispatch()

   const onChangeHandler = ({ typed, whatField }) => {
      setcluster({ ...cluster, [whatField]: typed })
   }
   // console.log(modalCueWhatList)
   const closeOnPressHandler = (id, whatList) => {
      setModalCueWhatList()
   }
   const submitOnPress = () => {
      dispatch(actionSaveNewCluster({ cluster, modalCueWhatList, infoNavigatorCurrentScreen }))
      setcluster(inputValueSchema)
   }
   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={typeof modalCueWhatList === 'string' ? true : false}
      >
         <ModalBg>
            <ModalCard>
               <MaterialIcons name='close' size={50} onPress={closeOnPressHandler} submitOnPress={submitOnPress} />
               <ModalCustomized1 onChangeHandler={onChangeHandler} submitOnPress={submitOnPress} cluster={cluster} inputValueSchema={inputValueSchema} />
            </ModalCard>
         </ModalBg>
      </Modal>
   )
}

//* depending on what screen this is used will render differently
const ModalCustomized1 = ({ onChangeHandler, cluster, submitOnPress, inputValueSchema }) => {
   const { modalCueWhatList } = useContext(FinancialsContext)
   return (
      <View>
         {Object.keys(inputValueSchema).map((whatField, index) => {
            return (
               <View key={index}>
                  <Text>{whatField}:</Text>
                  < TextInput
                     onChangeText={typed => onChangeHandler({ typed, whatField })}
                     placeholder={whatField}
                     value={cluster[whatField]} />
               </View>
            )
         })}
         <Text>{modalCueWhatList}</Text>
         <Button title='submit' onPress={() => submitOnPress()} />
      </View>
   )
}


export default ModalComp
