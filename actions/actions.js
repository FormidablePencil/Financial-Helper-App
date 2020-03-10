import { ADD_TO_OWE_LIST, ADD_TO_LENT_LIST } from "./types";
import * as Random from 'expo-random';

export const actionSaveListAccordingly = (collection, whatCollection, infoNavigatorCurrentScreen) => async dispatch => {
   console.log(infoNavigatorCurrentScreen)
   if (infoNavigatorCurrentScreen === 'LentOwed') {
      let renamedCollection = {}
      renamedCollection.amount = collection.item1
      renamedCollection.toEntity = collection.item2
      renamedCollection.id = await Random.getRandomBytesAsync(16);

      switch (true) {
         case whatCollection === 'firstList':
            dispatch({ type: ADD_TO_LENT_LIST, payload: renamedCollection })
            break;
         case whatCollection === 'secondList':
            dispatch({ type: ADD_TO_OWE_LIST, payload: renamedCollection })
            break;
         default:
            break;
      }
   }
}

export const actionEditSpecificItem = ({ id, listName, editedItem }) => dispatch => { //! try to see if you could refractor this code and simply put in
   if (listName === 'lent') { listName = 'LENT' }
   else if (listName === 'owed') { listName = 'OWED' }
   else { listName = false }

   if (editedItem === 'amount' && listName) {
      dispatch({ type: `CHANGED_AMOUNT_VALUE_IN_${listName}`, payload: { editedItem, id } })
   } else if (editItem === 'toEntity' && listName) {
      dispatch({ type: `CHANGED_TOENTITY_VALUE_IN_${listName}`, payload: { editedItem, id } }) //? does this work? are the values accessible through payload.id for instance?
   } else {
      console.log('err in actionEditSpecificItem')
   }
}
