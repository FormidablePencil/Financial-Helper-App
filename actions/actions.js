import { ADD_TO_OWE_LIST, ADD_TO_LENT_LIST } from "./types";

export const actionSaveListAccordingly = (collection, whatCollection, infoNavigatorCurrentScreen) => dispatch => {
   console.log(infoNavigatorCurrentScreen)
   if (infoNavigatorCurrentScreen === 'lentBorrowed') {
      let renamedCollection = {}
      switch (true) {
         case whatCollection === 'firstList':
            renamedCollection.amount = collection.item1
            renamedCollection.toEntity = collection.item2
            dispatch({ type: ADD_TO_LENT_LIST, payload: renamedCollection })
            break;
         case whatCollection === 'secondList':
            console.log('fromSec')
            renamedCollection.amount = collection.item1
            renamedCollection.toEntity = collection.item2
            dispatch({ type: ADD_TO_OWE_LIST, payload: renamedCollection })
            break;
         default:
            break;
      }
   }
}
