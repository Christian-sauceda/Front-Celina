
import { createSlice } from '@reduxjs/toolkit';




export const celinaSlice = createSlice({
    name: 'template',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
})




export const {increment} = celinaSlice.actions;