import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        getPostSuccess:(state,action)=>{
            state.loading=false,
            state.post=action.payload
        },
        getPostsSuccess:(state,action)=>{
            state.loading=false,
            state.posts=action.payload
        },
    }
})

export const {getPostSuccess,getPostsSuccess} = postSlice.actions

export default postSlice.reducer;