import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Card, AlignedCenter } from '../styles/stylesGlobal'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { ADD_TO_LIST } from '../actions/types';

const List = () => {
   const todoList = useSelector(state => state.todoList)

   return (
      <AlignedCenter>
         <Ionicons name='md-add' size={40} onPress={addItemToList} />
         {/* {todoList.map(item =>
            <View>
               <ListItem><Text>{item}</Text></ListItem>
               <Text>delete</Text>
               <Text>edit</Text>
            </View>
         )} */}
      </AlignedCenter>
   )
}

export default List
