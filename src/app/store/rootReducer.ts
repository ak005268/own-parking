import { combineReducers } from 'redux';
import exampleReducer from './example/slice';
import { loginReducer } from './login';
import { signupReducer } from './signup'
import { branchReducer } from './branch/branchSlice';

const rootReducer = combineReducers({
    example: exampleReducer,
    login: loginReducer,
    signup: signupReducer,
    branch: branchReducer
});

export { rootReducer };