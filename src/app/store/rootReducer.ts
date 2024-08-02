import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { signupReducer } from './signup'
import { branchReducer } from './branch/branchSlice';
import { ticketReducer } from './ticket';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    branch: branchReducer,
    ticket: ticketReducer,
});

export { rootReducer };