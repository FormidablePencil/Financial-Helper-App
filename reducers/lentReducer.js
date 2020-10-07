import { ADD_TO_LENT_COLLECTION, DELETE_SPECIFIC_ITEM_IN_LENT, CHANGED_SPECIFIC_VALUE_IN_OWED, CHANGED_SPECIFIC_VALUE_IN_LENT } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_TO_LENT_COLLECTION:
         return [...state, payload]
      case DELETE_SPECIFIC_ITEM_IN_LENT:
         return state.flatMap(x => x).filter(item => item.id !== payload)
      case CHANGED_SPECIFIC_VALUE_IN_LENT:
         return state.flatMap(x => x).map(item => {
            if (item.id === payload.id) {
               item[payload.whatField] = payload.typed
               return item
            } else {
               return item
            }
         })
      default:
         return state
   }
}
