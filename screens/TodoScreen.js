import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import List from '../components/List'
import { Container } from '../styles/stylesGlobal'
import MyList from '../components/MyList'
import ModalComp from '../components/ModalComp'
import { useSelector } from 'react-redux'
import { FinancialsContext } from '../navigators/InfoNavigator'

const TodoScreen = () => {
   const todoListSchema = { todo: '', dueDate: '', furtherDescription: '' }
   const todoList = useSelector(state => state.todoList)
   const { modalCueWhatList, setModalCueWhatList, infoNavigatorCurrentScreen, setinfoNavigatorCurrentScreen } = useContext(FinancialsContext)
   
   return (
      <Container>
         {modalCueWhatList === 'todoList' ?
            <ModalComp inputValueSchema={todoListSchema} modalCueWhatList={modalCueWhatList} setModalCueWhatList={setModalCueWhatList} />
            : null
         }
         <MyList inputValueSchema={todoListSchema} collection={todoList} collectionName='todoList' />
      </Container>
   )
}

export default TodoScreen
