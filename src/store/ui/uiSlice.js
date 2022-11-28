
import { createSlice } from '@reduxjs/toolkit';


export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isUsuariosModalOpen: false,
        isEmpresasModalOpen: false,
        isAsientosModalOpen: false,
        isGeneracionAsientosTemporalesModalOpen: false,
        isGeneracionAsientosMayorizadosModalOpen: false,
    },
    reducers: {

        //* Modal Usuarios
        onOpenUsuariosModal: (state, /* action */) => {
            state.isUsuariosModalOpen = true;
        },
        onCloseUsuariosModal: (state, /* action */) => {
            state.isUsuariosModalOpen = false;
        },

        //* Modal Usuarios
        onOpenEmpresasModal: (state, /* action */) => {
            state.isEmpresasModalOpen = true;
        },
        onCloseEmpresasModal: (state, /* action */) => {
            state.isEmpresasModalOpen = false;
        },

        //* Modal Asientos
        onOpenAsientosModal: (state, /* action */) => {
            state.isAsientosModalOpen = true;
        },
        onCloseAsientosModal: (state, /* action */) => {
            state.isAsientosModalOpen = false;
        },

        //* Modal Generacion Asientos
        onOpenGeneracionAsientosTemporales: (state, /* action */) => {
            state.isGeneracionAsientosTemporalesModalOpen = true;
        },
        onCloseGeneracionAsientosTemporales: (state, /* action */) => {
            state.isGeneracionAsientosTemporalesModalOpen = false;
        },

        onOpenGeneracionAsientosMayorizados: (state, /* action */) => {
            state.isGeneracionAsientosMayorizadosModalOpen = true;
        },
        onCloseGeneracionAsientosMayorizados: (state, /* action */) => {
            state.isGeneracionAsientosMayorizadosModalOpen = false;
        },
    }
})

export const {
    onOpenUsuariosModal,
    onCloseUsuariosModal,

    onOpenEmpresasModal,
    onCloseEmpresasModal,

    onOpenAsientosModal,
    onCloseAsientosModal,

    onOpenGeneracionAsientosTemporales,
    onCloseGeneracionAsientosTemporales,
    onOpenGeneracionAsientosMayorizados,
    onCloseGeneracionAsientosMayorizados,

} = uiSlice.actions;