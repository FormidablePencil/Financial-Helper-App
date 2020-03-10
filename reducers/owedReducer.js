import { ADD_TO_OWE_LIST, EDIT_ITEM_IN_OWE_COLLECTION } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case ADD_TO_OWE_LIST:
         return [...state, payload] // give it uuid
      case EDIT_ITEM_IN_OWE_COLLECTION:
         state.map(collection => console.log(collection))
         console.log('here!')
         // [...state, )]
         break
      default:
         return state
   }
}
