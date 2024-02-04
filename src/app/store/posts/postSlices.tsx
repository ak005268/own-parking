import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface PostData{
    userId:number,
    id:number,
    title:string,
    body:string
}

interface Posts{
    id:number,
    postData:PostData[],
    loading:boolean,
    error:null | string

}

const initialState: Posts = {
    id: 0,
    postData: [{
        userId: 0,
        id: 0,
        title: '',
        body: '',
    }],
    loading: false,
    error: null,
};
const postsSlice=createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPost: (state, _action:PayloadAction<number>) => {
            state.loading=true;
        },
        postAdd: (state, action) => {
            state.loading=false;
            state.postData.push(action.payload);
        }

    }
});

const PostPersistConfig = {
    key: 'postsData',
    storage,
    keyPrefix: '',
    whitelist: ['postData'],
};
export const { getPost, postAdd }=postsSlice.actions;
export default persistReducer(PostPersistConfig, postsSlice.reducer);