import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        statusAuth: 'not-authenticated', //authenticated, checking
        uid: null,
        userAuth: null,
        roleUser: null,
        errorMessage: null
        // token: null
    },
    reducers: {
        onLogin: (state, action) => { //* Para autenticar al usuario 
            // console.log('PAYLOAD >> ', action.payload.data)
            state.statusAuth = 'authenticated'
            state.userAuth = action.payload.data.FIRSTNAME
            state.roleUser = action.payload.data.NOM_TYPE
        },

        onLogout: (state, action) => { //* Para autenticar al usuario 
            state.statusAuth = 'not-authenticated'
            state.userAuth = 'Lucas de ejemplo'
            state.token = 'Mi token'
        },
    }
})

export const {
    onLogin,
    onLogout
} = authSlice.actions;