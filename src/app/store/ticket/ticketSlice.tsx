import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState={
    isRequesting: false,
    ticketData: [],
    error: null
};

const ticketSlice=createSlice({

    name: 'Ticket',
    initialState,
    reducers: {
        ticketRequest: (state, _action) => {
            state.isRequesting= true;
            state.error=null;
        },
        ticketSuccess: (state, action) => {
            state.isRequesting=false;
            state.error=null;
            state.ticketData=action.payload;
        },
        ticketFail: (state, action) => {
            state.isRequesting =false ;
            state.error = null;
            state.error=action.payload;
        }
    }
});
const ticketPersistConfig={
    key: 'branch',
    storage,
    keyPrefix: '',
    whitelist: ['']
};

export const { ticketFail, ticketRequest, ticketSuccess }=ticketSlice.actions;
export const ticketReducer=persistReducer(ticketPersistConfig, ticketSlice.reducer);