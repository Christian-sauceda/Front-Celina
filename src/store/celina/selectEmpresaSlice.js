import { createSlice } from '@reduxjs/toolkit';

export const selectEmpresaSlice = createSlice({
    name: 'selectEmpresa',
    initialState: {
        statusSelectEmpresa: 'checking',
        empresaSeleccionada: null,
    },
    reducers: {
        onSelectEmpresa: (state, action) => { //* Para autenticar al usuario 
            state.statusSelectEmpresa = 'selected'
            state.empresaSeleccionada = action.payload
        },

        onLeaveEmpresa: (state, /* action */) => {
            state.statusSelectEmpresa = 'checking',
            state.empresaSeleccionada = null
        }
    }
})

export const {
    onSelectEmpresa,
    onLeaveEmpresa
} = selectEmpresaSlice.actions;