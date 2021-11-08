import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types";


interface BlogState {
    posts: Post[],
    current: string, 
}


const initialState: BlogState = {
    posts: [],
    current: '',
  };

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCurrent(state, action: PayloadAction<string>) {
            state.current = action.payload
        }, 
    },
  })


  export const { setCurrent } = blogSlice.actions;

  export default blogSlice.reducer;