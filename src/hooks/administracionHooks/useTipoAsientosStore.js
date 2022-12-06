import { useDispatch, useSelector } from "react-redux"
import { backCelinaApi } from "../../api"

// Slices
import { onCheckingTipoAsientos, onClearGetTipoAsientos, onErrorGetTipoAsientos, onGetTipoAsientos } from "../../store/celina/administracion/getTipoAsientosSlice"

export const useTipoAsientosStore = () => {
    const {statusGetTipoAsientos, dataTipoAsientos, errorMessageGetTipoAsientos} = useSelector(state => state.getTipoAsiento)
    const dispatch = useDispatch()

    const startGetTipoAsientos = async () => {
        dispatch(onCheckingTipoAsientos())

        try{
            let {data} = await backCelinaApi.get('/asientos/show-tipos')
            data = data.data
            data = data.map(e => Object.values({
                NOMBRE: e.NOM_TIPO,
                DESCRIPCION: e.DES_TIPO,
            }))
            // console.log('data ASIENTOS >> ', data)
            dispatch(onGetTipoAsientos(data))
        }catch(error){
            console.log(error)
            onErrorGetTipoAsientos('No hay asientos registrados...')
        }
    }
    const startClearGetTipoAsientos = () => {
        dispatch(onClearGetTipoAsientos())
    }

  return {
    //* Properties
    statusGetTipoAsientos,
    dataTipoAsientos,
    errorMessageGetTipoAsientos,

    //* Metodos
    startGetTipoAsientos,
    startClearGetTipoAsientos
  }
}
