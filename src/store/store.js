
import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, celinaSlice, authSlice, selectEmpresaSlice, getEmpresasSlice, } from './';
import { getTipoAsientosSlice } from './celina/administracion/getTipoAsientosSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        celina: celinaSlice.reducer,
        selectEmpresa: selectEmpresaSlice.reducer,
        getEmpresas: getEmpresasSlice.reducer,
        getTipoAsiento: getTipoAsientosSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // Esto solo es para que no me de error de "Serialize" con las fechas (osea para que no revise si las puede serializar)
    }),
})

