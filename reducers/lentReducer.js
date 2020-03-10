import { ADD_TO_LENT_LIST } from "../actions/types"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case ADD_TO_LENT_LIST:
         return [...state, payload] // give it uuid

      default:
         return state
   }
}
