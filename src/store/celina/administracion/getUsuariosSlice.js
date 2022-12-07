import { createSlice } from '@reduxjs/toolkit';

export const getUsuariosSlice = createSlice({
    name: 'getUsuariosSlice',
    initialState: {
        statusGetUsuarios: 'checking',
        dataUsuarios: [],
        errorMessageGetUsuarios: null
    },
    reducers: {
        onCheckingUsuarios: (state, action) => { 
            state.statusGetUsuarios = 'checking'
            state.dataUsuarios = []
            state.errorMessageGetUsuarios = null
        },

        onGetUsuarios: (state, action) => {  //* Para guardar las Usuarios
            state.statusGetUsuarios = 'done'
            state.dataUsuarios = action.payload
            state.errorMessageGetUsuarios = null
        },
        onErrorGetUsuarios: (state, action) => {
            state.statusGetUsuarios = 'error'
            state.dataUsuarios = []
            state.errorMessageGetUsuarios = action.payload
        },
        onClearGetUsuarios: (state, /* action */) => {
            state.statusGetUsuarios = 'checking'
            state.dataUsuarios = []
            state.errorMessageGetUsuarios = null
        },
    }
})

export const {
    onCheckingUsuarios,
    onGetUsuarios,
    onErrorGetUsuarios,
    onClearGetUsuarios
} = getUsuariosSlice.actions;