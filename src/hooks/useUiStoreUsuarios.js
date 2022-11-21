import { useDispatch, useSelector } from "react-redux"
import { onCloseUsuariosModal, onOpenUsuariosModal } from "../store"

export const useUiStoreUsuarios = () => {
    const dispatch = useDispatch()
    const {isUsuariosModalOpen} = useSelector(state => state.ui)

    const closeUsuariosModal = ( ) => {
        dispatch(onCloseUsuariosModal())
    }
    
    const openUsuariosModal = ( ) => {
        dispatch(onOpenUsuariosModal())
    }

    return {
        //* Properties
        isUsuariosModalOpen,

        //* Metodos
        closeUsuariosModal,
        openUsuariosModal
    }
}


