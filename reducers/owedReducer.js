import { ADD_TO_OWE_LIST } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case ADD_TO_OWE_LIST:
         console.log(state, 'sds')
         return [...state, payload] // give it uuid

      default:
         return state
   }
}
