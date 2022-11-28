import { useDispatch, useSelector } from "react-redux"
import { onCloseGeneracionAsientosMayorizados, onCloseGeneracionAsientosTemporales, onOpenGeneracionAsientosMayorizados, onOpenGeneracionAsientosTemporales, onOpenUsuariosModal } from "../store"

export const useUiStoreGeneracionAsientos = () => {
  const dispatch = useDispatch()
  const {isGeneracionAsientosTemporalesModalOpen, isGeneracionAsientosMayorizadosModalOpen} = useSelector(state => state.ui)

  const openGeneracionAsientosTemporalesModal = () =>{
    dispatch(onOpenGeneracionAsientosTemporales())
  }

  const closeGeneracionAsientosTemporalesModal = () =>{
    dispatch(onCloseGeneracionAsientosTemporales())
  }

  const openGeneracionAsientosMayorizadosModal = () => {
    dispatch(onOpenGeneracionAsientosMayorizados())
  }

  const closeGeneracionAsientosMayorizadosModal = () => {
    dispatch(onCloseGeneracionAsientosMayorizados())
  }

  return {
    //* Properties
    isGeneracionAsientosTemporalesModalOpen,
    isGeneracionAsientosMayorizadosModalOpen,

    //* Metodos
    openGeneracionAsientosTemporalesModal,
    closeGeneracionAsientosTemporalesModal,
    openGeneracionAsientosMayorizadosModal,
    closeGeneracionAsientosMayorizadosModal
  }
}
