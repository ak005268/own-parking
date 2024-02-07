import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    isRequesting: false,
    signupData: [],
    error: null

};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {

        signUpRequest: (state, _action) => {
            state.isRequesting = true;
            state.error = null;
        },
        signUpSuccess: (state, _action) => {
            state.isRequesting = false;
            state.error = null;
        },
        signUpFail: (state, action) => {
            state.isRequesting =false ;
            state.error = null;
            state.error=action.payload;
        }

    }
});

const signupersistConfig = {
    key: 'signup',
    storage,
    keyPrefix: '',
    whitelist: [''],
};
export const { signUpFail, signUpRequest, signUpSuccess }=signupSlice.actions;
export const signupReducer= persistReducer(signupersistConfig, signupSlice.reducer);