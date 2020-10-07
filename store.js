import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import lentReducer from './reducers/lentReducer'
import owedReducer from './reducers/owedReducer'
import todoListReducer from './reducers/todoListReducer'

const rootReducer = combineReducers({
  lent: lentReducer,
  owed: owedReducer,  
  todoList: todoListReducer,
})

const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
