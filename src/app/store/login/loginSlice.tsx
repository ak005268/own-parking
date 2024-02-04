import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: any=
{
    isRequesting: false,
    userData: null,
    error: null,
    isAuthenticated: false
};

const loginSlice=createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginRequest: (state, _action:PayloadAction<any>) => {
            state.isRequesting=true;
            state.error=null;
            state.userData=null;
            state.isAuthenticated=false;

        }, loginSuccess: (state, action:PayloadAction<any>) => {
            state.isRequesting=false;
            state.error=null;
            state.userData=action.payload;
            state.isAuthenticated=true;

        }, loginFail: (state, action:PayloadAction<any>) => {
            state.isRequesting=false;
            state.userData=null;
            state.error=action.payload;
            state.isAuthenticated=false;

        },
        clearLoginState: (_state) => {
            // Reset the state to the initial state
            return initialState;
        }
    }
});

const loginPersistConfig = {
    key: 'userData',
    storage,
    keyPrefix: '',
    whitelist: ['userData', 'isAuthenticated'],
};
export const { loginFail, loginRequest, loginSuccess, clearLoginState }=loginSlice.actions;
export const loginReducer= persistReducer(loginPersistConfig, loginSlice.reducer);
