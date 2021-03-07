import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { users } from './user.reducer';
import { notes } from './note.reducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  alert,
  authentication,
  users,
  notes
})

export default rootReducer
