import { useState } from "react"
import { backCelinaApi } from "../../api"

export const useEmpresasStore = () => {
    let dataEmpresas = []
    const [empresasPorUserLogged, setEmpresasPorUserLogged] = useState([])

    const startGetEmpresasPorCodUserLogeado = async () => {
        try{
            const {data} = await backCelinaApi.get(`/empresas/show`)
            // console.log('response empresas >> ', data.data)
            dataEmpresas = data.data;
            dataEmpresas = dataEmpresas.map(e => Object.values({
              COD_EMPRESA: e.COD_EMPRESA,
              NOMBRE: e.NOMBRE
            }))
            console.log(dataEmpresas)
            
            setEmpresasPorUserLogged(dataEmpresas)

        }catch(error){
            console.log(error)
        }
    }
    
  return {
    //* Properties
    empresasPorUserLogged,

    //* Metodos
    startGetEmpresasPorCodUserLogeado

  }
}
