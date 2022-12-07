import { backCelinaApi } from "../../api"

import { useDispatch, useSelector } from "react-redux"

// Slices
import { onCheckingBitacora, onClearGetBitacora, onErrorGetBitacora, onGetBitacora } from "../../store"

export const useBitacoraStore = () => {
    const dispatch = useDispatch()
    const {statusGetBitacora, dataBitacora, errorMessageGetBitacora} = useSelector(state => state.getBitacora)
    const {empresaSeleccionada} = useSelector(state => state.selectEmpresa)

    const startGetBitacoraPorCodEmpresa = async () =>{
        dispatch(onCheckingBitacora())
        try {
            let {data} = await backCelinaApi.get(`/bitacoras/show/${empresaSeleccionada.idEmpresa}`)
            data = data.data
            data = data.map(e => Object.values({
                OPERACION: e.OPERACION,
                DETALLE: e.DETALLE,
                PANTALLA: e.PANTALLA,
                TABLAS: e.TABLAS,
                IP: e.IP,
                HOSTNAME: e.HOSTNAME,
                FEC_REGISTRO: e.FEC_REGISTRO
            }))

            dispatch(onGetBitacora(data))
        } catch (error) {
            console.log(error)
            dispatch(onErrorGetBitacora('No hay bitacora registrada...'))
        }
    }

    const startClearGetBitacoraPorCodEmpresa = ( ) => {
        dispatch(onClearGetBitacora())
    }

  return {

    //* Properties
    statusGetBitacora,
    dataBitacora, 
    errorMessageGetBitacora,

    //* Metodos
    startGetBitacoraPorCodEmpresa,
    startClearGetBitacoraPorCodEmpresa
  }
}
