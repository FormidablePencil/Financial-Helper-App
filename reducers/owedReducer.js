import { ADD_TO_OWED_COLLECTION, DELETE_SPECIFIC_ITEM_IN_OWED, CHANGED_SPECIFIC_VALUE_IN_OWED } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_TO_OWED_COLLECTION:
         return [...state, payload] // give it uuid
      case DELETE_SPECIFIC_ITEM_IN_OWED:
         return state.flatMap(x => x).filter(item => item.id !== payload)
      case CHANGED_SPECIFIC_VALUE_IN_OWED:
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
