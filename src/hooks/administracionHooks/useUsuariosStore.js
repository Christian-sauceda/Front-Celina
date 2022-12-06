import { useState } from "react";
import { useSelector } from "react-redux";
import { backCelinaApi } from "../../api";

export const useUsuariosStore = () => {
    let dataUsers = []
    const [usuarios, setUsuarios] = useState([])
    const {empresaSeleccionada} = useSelector(state => state.selectEmpresa)

    const startGetUsuarios = async () => {
        try {
            const {data} = await backCelinaApi.get(`/usuarios/show/${empresaSeleccionada.idEmpresa}`)
            // const {data} = resp;
            dataUsers = data.data;
            // console.log('resp >> ', resp)
            // console.log('DaatUsers22>> ', dataUsers)
            // console.log('Ejecutado con exito!')
      
            dataUsers = dataUsers.map(e => Object.values({
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
            // {ID: e.ID, FIRSTNAME: e.FIRSTNAME}
            // console.log('DaatUsers >> ', dataUsers)
            // console.log('DATAdataUsuarios >> ', dataUsuarios)
            setUsuarios(dataUsers)
      
        } catch (error) {
            // console.log(error)
            setUsuarios(null) //* En caso de que no encuentro ningun usuario
        }
    } 

  return {
    //* Properties
    usuarios,

    //* Metodos
    startGetUsuarios
  }
}
