import {combineReducers} from 'redux'

import appDataReducer from './appDataReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
  appDataState: appDataReducer,
  authState: authReducer,
})

export default reducers
