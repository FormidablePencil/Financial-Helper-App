import { ADD_TO_OWED_COLLECTION, ADD_TO_LENT_COLLECTION, DELETE_SPECIFIC_ITEM_IN_OWED, DELETE_SPECIFIC_ITEM_IN_LENT, ADD_TO_LIST, DELETE_SPECIFIC_ITEM_IN_TODO, CHANGED_SPECIFIC_VALUE_IN_TODO, DELETE_SPECIFIC_ITEM_IN_TODOLIST } from "./types";
import * as Random from 'expo-random';

export const actionSaveNewCluster = ({ cluster, modalCueWhatList, infoNavigatorCurrentScreen }) => async dispatch => {
   const id = await Random.getRandomBytesAsync(16)
   cluster.id = id
   dispatch({ type: `ADD_TO_${modalCueWhatList.toUpperCase()}_COLLECTION`, payload: cluster })
}

export const actionEditSpecificItem = ({ collectionName, inputValues }) => dispatch => {
   dispatch({ type: `CHANGED_SPECIFIC_VALUE_IN_${collectionName.toUpperCase()}`, payload: inputValues })
}

export const actionDeleteItemFromCertainCollection = ({ id, collectionName }) => dispatch => {
   dispatch({ type: `DELETE_SPECIFIC_ITEM_IN_${collectionName.toUpperCase()}`, payload: id })
}