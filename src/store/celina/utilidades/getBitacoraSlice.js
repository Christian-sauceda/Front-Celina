
import { createSlice } from '@reduxjs/toolkit';

export const getBitacoraSlice = createSlice({
    name: 'getBitacoraSlice',
    initialState: {
        statusGetBitacora: 'checking',
        dataBitacora: [],
        errorMessageGetBitacora: null
    },
    reducers: {
        onCheckingBitacora: (state, action) => { 
            state.statusGetBitacora = 'checking'
            state.dataBitacora = []
            state.errorMessageGetBitacora = null
        },

        onGetBitacora: (state, action) => {  //* Para guardar las Bitacora
            state.statusGetBitacora = 'done'
            state.dataBitacora = action.payload
            state.errorMessageGetBitacora = null
        },
        onErrorGetBitacora: (state, action) => {
            state.statusGetBitacora = 'error'
            state.dataBitacora = []
            state.errorMessageGetBitacora = action.payload
        },
        onClearGetBitacora: (state, /* action */) => {
            state.statusGetBitacora = 'checking'
            state.dataBitacora = []
            state.errorMessageGetBitacora = null
        },
    }
})

export const {
    onCheckingBitacora,
    onGetBitacora,
    onErrorGetBitacora,
    onClearGetBitacora
} = getBitacoraSlice.actions;