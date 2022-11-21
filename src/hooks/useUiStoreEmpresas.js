import { useDispatch, useSelector } from "react-redux"
import { onCloseEmpresasModal, onOpenEmpresasModal } from "../store"

export const useUiStoreEmpresas = () => {
    const dispatch = useDispatch()
    const {isEmpresasModalOpen} = useSelector(state => state.ui)

    const closeEmpresasModal = ( ) => {
        dispatch(onCloseEmpresasModal())
    }
    
    const openEmpresasModal = ( ) => {
        dispatch(onOpenEmpresasModal())
    }

  return {
    //* Properties
    isEmpresasModalOpen,

    //* Metodos
    closeEmpresasModal,
    openEmpresasModal
  }
}
