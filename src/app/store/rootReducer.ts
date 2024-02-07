import { combineReducers } from 'redux';
import exampleReducer from './example/slice';
import { loginReducer } from './login';
import { signupReducer } from './signup'

const rootReducer = combineReducers({
    example: exampleReducer,
    login: loginReducer,
    signup: signupReducer,
});

export { rootReducer };