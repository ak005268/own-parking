import { combineReducers } from 'redux';
import exampleReducer from './example/slice';
import postsReducer from './posts/postSlices';
import { loginReducer } from './login';

const rootReducer = combineReducers({
    example: exampleReducer,
    posts: postsReducer,
    login: loginReducer,
});

export { rootReducer };