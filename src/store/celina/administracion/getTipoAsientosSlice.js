import { createSlice } from '@reduxjs/toolkit';

export const getTipoAsientosSlice = createSlice({
    name: 'getTipoAsientosSlice',
    initialState: {
        statusGetTipoAsientos: 'checking',
        dataTipoAsientos: [],
        errorMessageGetTipoAsientos: null
    },

    reducers: {
        onCheckingTipoAsientos: (state, action) => { 
            state.statusGetTipoAsientos = 'checking'
            state.dataTipoAsientos = []
            state.errorMessageGetTipoAsientos = null
        },

        onGetTipoAsientos: (state, action) => {  //* Para guardar las TipoAsientos
            state.statusGetTipoAsientos = 'done'
            state.dataTipoAsientos = action.payload
            state.errorMessageGetTipoAsientos = null
        },
        onErrorGetTipoAsientos: (state, action) => {
            state.statusGetTipoAsientos = 'error'
            state.dataTipoAsientos = []
            state.errorMessageGetTipoAsientos = action.payload
        },
        onClearGetTipoAsientos: (state, /* action */) => {
            state.statusGetTipoAsientos = 'checking'
            state.dataTipoAsientos = []
            state.errorMessageGetTipoAsientos = null
        },
    }
})

export const {
    onCheckingTipoAsientos,
    onGetTipoAsientos,
    onErrorGetTipoAsientos,
    onClearGetTipoAsientos
} = getTipoAsientosSlice.actions;