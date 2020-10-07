import { ADD_TO_LIST, DELETE_SPECIFIC_ITEM_IN_TODOLIST, CHANGED_SPECIFIC_VALUE_IN_TODOLIST, ADD_TO_TODOLIST_COLLECTION } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case ADD_TO_TODOLIST_COLLECTION:
         return [...state, payload]
      case DELETE_SPECIFIC_ITEM_IN_TODOLIST:
         console.log('DELETE_SPECIFIC_ITEM_IN_TODOLIST')
         return state.filter(item => item.id !== payload)
      case CHANGED_SPECIFIC_VALUE_IN_TODOLIST:
         return state.map(item => {
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
