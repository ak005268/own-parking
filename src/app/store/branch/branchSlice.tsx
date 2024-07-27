import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState={
    isRequesting: false,
    branchData: [],
    error: null
};

const branchSlice=createSlice({
    name: 'branch',
    initialState,
    reducers: {
        branchRequest: (state, _action) => {
            state.isRequesting= true;
            state.error=null;
        },
        branchSuccess: (state, action) => {
            state.isRequesting=false;
            state.error=null;
            state.branchData=action.payload;
        },
        branchFail: (state, action) => {
            state.isRequesting =false ;
            state.error = null;
            state.error=action.payload;
        }
    }
});

const branchPersistConfig={
    key: 'branch',
    storage,
    keyPrefix: '',
    whitelist: ['']
};
export const { branchFail, branchRequest, branchSuccess }=branchSlice.actions;
export const branchReducer=persistReducer(branchPersistConfig, branchSlice.reducer);