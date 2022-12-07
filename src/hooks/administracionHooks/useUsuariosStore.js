import { useDispatch, useSelector } from "react-redux";
import { backCelinaApi } from "../../api";

// Slices
import { onCheckingUsuarios, onClearGetUsuarios, onErrorGetUsuarios, onGetUsuarios } from "../../store";

export const useUsuariosStore = () => {
    let dataUsersTabla = []
    const dispatch = useDispatch()
    const {statusGetUsuarios, dataUsuarios, errorMessageGetUsuarios} = useSelector(state => state.getUsuarios)
    const {empresaSeleccionada} = useSelector(state => state.selectEmpresa)

    const startGetUsuarios = async () => {
        dispatch(onCheckingUsuarios)

        try {
            const {data} = await backCelinaApi.get(`/usuarios/show/${empresaSeleccionada.idEmpresa}`)
            dataUsersTabla = data.data;
            dataUsersTabla = dataUsersTabla.map(e => Object.values({
              // ID: e.ID,
              USERNAME: e.USERNAME,
              FIRSTNAME: e.FIRSTNAME,
              MIDDLENAME: e.MIDDLENAME ,
              // LASTNAME: e.LASTNAME,
              USEREMAIL: e.USEREMAIL,
              SERVEREMAIL: e.SERVEREMAIL,
              SEX: e.SEX,
              IND_CIVIL: e.AGE,
              NUMEROS: e.NUMEROS,
              NOM_TYPE: e.NOM_TYPE,
              NAM_COUNTRY: e.NAM_COUNTRY,
              NAME_STATE: e.NAME_STATE,
              NAM_CITY: e.NAM_CITY
            }))
            dispatch(onGetUsuarios(dataUsersTabla))
        } catch (error) {
            console.log(error)
            dispatch(onErrorGetUsuarios('No hay usuarios registrados...'))
        }
    }

    const startClearGetUsuarios = () => {
      dispatch(onClearGetUsuarios())
    }

  return {
    //* Properties
    statusGetUsuarios,
    dataUsuarios,
    errorMessageGetUsuarios,

    //* Metodos
    startGetUsuarios,
    startClearGetUsuarios,
  }
}
