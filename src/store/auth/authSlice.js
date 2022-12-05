import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        statusAuth: 'checking', //authenticated, checking, not-authenticated
        // uid: null,
        // userAuth: null,
        // roleUser: null,
        user: {},
        errorMessage: null,
    },
    reducers: {
        onLogin: (state, action) => { //* Para autenticar al usuario 
            // console.log('PAYLOAD >> ', action.payload.data)
            state.statusAuth = 'authenticated'
            state.user.userAuth = action.payload.data.FIRSTNAME
            state.user.roleUser = action.payload.data.NOM_TYPE
            state.user.token = action.payload.token
            state.errorMessage = null
        },

        onLogout: (state, action) => { //* Para autenticar al usuario 
            state.statusAuth = 'not-authenticated'
            state.user = {}
            state.errorMessage = action.payload
        },

        onChecking: (state, action) => {
            state.statusAuth = 'checking'
            state.user = {}
            state.errorMessage = null
        }
    }
})

export const {
    onLogin,
    onLogout,
    onChecking
} = authSlice.actions;