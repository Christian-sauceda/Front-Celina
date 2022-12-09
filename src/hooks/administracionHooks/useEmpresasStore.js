import { backCelinaApi } from "../../api"

import { useDispatch, useSelector } from "react-redux"

// Slices
import { onCheckingEmpresas, onClearGetEmpresas, onErrorGetEmpresas, onGetEmpresas } from "../../store"

export const useEmpresasStore = () => {
    const { statusGetEmpresas, dataEmpresas, errorMessageGetEmpresas } = useSelector(state => state.getEmpresas)
    const dispatch  = useDispatch()

    //* Eventos Gets
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
      // Script para poder dar el formato a los numeros de Telefonos y dividirlos bien en la tabla (ya que me los trae en un solo campo ambos a la vez...)
      // const telefonoCelular = dataEmpresas[0].NUMEROS.split('|')[1].split(':')[1]
      // const telefonoOficina = dataEmpresas[0].NUMEROS.split('|')[0].split(':')[1]

      return (dataEmpresas.map(e => Object.values({
        NOMBRE: e.NOMBRE,
        RTN: e.RTN,
        WEB: e.WEB,
        EMAIL: e.USEREMAIL,
        TELEFONO: e.NUMEROS.split('|')[1].split(':')[1],
        CELULAR: e.NUMEROS.split('|')[0].split(':')[1],
        DIRECCION: e.ADDRESS,
        CIUDAD: e.NAM_CITY,
        ESTADO: e.NAME_STATE,
        PAIS: e.NAM_COUNTRY
      })))
    } 

    const startGetEstadosPorPais = async () => { // Traer Estados por pais, para luego utilizarlo en el "select"
      try {
        const resp = await backCelinaApi.get(`/direccion/estados/${2}`)
        console.log('DATA NEW >> ', resp)
      } catch (error) {
        console.log(error)
      }
    }
    

    //* Eventos Put
    const startUpdateEmpresasPorCodEmpresa = async () => {
      null
    }


  return {
    //* Properties
    statusGetEmpresas,
    dataEmpresas,
    errorMessageGetEmpresas,

    //* Metodos
      // Traer Datos
    startGetEmpresasPorCodUserLogeado,
    startClearGetEmpresaPorCodUserLogeado,
    startTablaGetEmpresasPorCodUserLogeado,

      // Traer Datos Direccion
    startGetEstadosPorPais,

      // Actualizar Datos
    startUpdateEmpresasPorCodEmpresa,

  }
}
