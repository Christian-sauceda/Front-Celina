import { backCelinaApi } from "../../api"

import { useDispatch, useSelector } from "react-redux"

// Slices
import { onCheckingEmpresas, onClearGetEmpresas, onErrorGetEmpresas, onGetEmpresas } from "../../store"

export const useEmpresasStore = () => {
    const { statusGetEmpresas, dataEmpresas, errorMessageGetEmpresas } = useSelector(state => state.getEmpresas)
    const dispatch  = useDispatch()

    const startGetEmpresasPorCodUserLogeado = async () => {
        dispatch(onCheckingEmpresas())
        try{
          const {data} = await backCelinaApi.get(`/empresas/show`)
          dispatch(onGetEmpresas(data.data))
        }catch(error){ // En caso de que no encuentre ninguna empresa
          console.log(error)
          dispatch(onErrorGetEmpresas('No hay empresas registradas...'))
        }
    }

    const startClearGetEmpresaPorCodUserLogeado = () => {
      dispatch(onClearGetEmpresas())
    }

    const startTablaGetEmpresasPorCodUserLogeado = () =>{ // Aqui no ocupo hacer peticion a la API, ya que esta misma se hizo desde que el usuario se logeo a la cuenta, entonces los datos ya estaran almacenados en el "store" y solo usare esta funcion para darles formato para pasarlos a la tabla de "empresas"
      return (dataEmpresas.map(e => Object.values({
        NOMBRE: e.NOMBRE,
        RTN: e.RTN,
        WEB: e.WEB,
        EMAIL: e.USEREMAIL,
        TELEFONO: e.NUMEROS,
        CELULAR: '',
        DIRECCION: e.ADDRESS,
        CIUDAD: e.NAM_CITY,
        ESTADO: e.NAME_STATE,
        PAIS: e.NAM_COUNTRY
      })))
    }    


  return {
    //* Properties
    statusGetEmpresas,
    dataEmpresas,
    errorMessageGetEmpresas,

    //* Metodos
    startGetEmpresasPorCodUserLogeado,
    startClearGetEmpresaPorCodUserLogeado,
    startTablaGetEmpresasPorCodUserLogeado

  }
}
