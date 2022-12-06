
import { createSlice } from '@reduxjs/toolkit';

export const getEmpresasSlice = createSlice({
    name: 'getEmpresasSlice',
    initialState: {
        statusGetEmpresas: 'checking',
        dataEmpresas: [],
        errorMessageGetEmpresas: null
    },
    reducers: {
        onCheckingEmpresas: (state, action) => { 
            state.statusGetEmpresas = 'checking'
            state.dataEmpresas = []
            state.errorMessageGetEmpresas = null
        },

        onGetEmpresas: (state, action) => {  //* Para guardar las empresas
            state.statusGetEmpresas = 'done'
            state.dataEmpresas = action.payload
            state.errorMessageGetEmpresas = null
        },
        onErrorGetEmpresas: (state, action) => {
            state.statusGetEmpresas = 'error'
            state.dataEmpresas = []
            state.errorMessageGetEmpresas = action.payload
        },
        onClearGetEmpresas: (state, /* action */) => {
            state.statusGetEmpresas = 'checking'
            state.dataEmpresas = []
            state.errorMessageGetEmpresas = null
        },
    }
})

export const {
    onCheckingEmpresas,
    onGetEmpresas,
    onErrorGetEmpresas,
    onClearGetEmpresas
} = getEmpresasSlice.actions;