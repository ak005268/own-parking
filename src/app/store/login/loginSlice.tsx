import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: any=
{
    isRequesting: false,
    loginData: null,
    error: null,
};

const loginSlice=createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginRequest: (state, _action:PayloadAction<any>) => {
            state.isRequesting=true;
            state.loginData=null;
        }, loginSuccess: (state, action:PayloadAction<any>) => {
            state.isRequesting=false;
            state.loginData=action.payload;

        }, loginFail: (state, action:PayloadAction<any>) => {
            state.isRequesting=false;
            state.loginData=null;
            state.error=action.payload;

        },
    }
});

const loginPersistConfig = {
    key: 'loginData',
    storage,
    keyPrefix: '',
    whitelist: ['loginData'],
};
export const { loginFail, loginRequest, loginSuccess }=loginSlice.actions;
export const loginReducer= persistReducer(loginPersistConfig, loginSlice.reducer);
