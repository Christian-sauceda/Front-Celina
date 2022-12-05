import { useDispatch, useSelector } from "react-redux"
import { onCloseAsientosModal, onOpenAsientosModal } from "../../store"

export const useUiStoreAsientos = () => {

    const dispatch = useDispatch()
    const {isAsientosModalOpen} = useSelector(state => state.ui)

    const closeAsientosModal = ( ) => {
        dispatch(onCloseAsientosModal())
    }
    
    const openAsientosModal = ( ) => {
        dispatch(onOpenAsientosModal())
    }

  return {
   //* Properties
   isAsientosModalOpen,

   //* Metodos
   closeAsientosModal,
   openAsientosModal
  }
}
