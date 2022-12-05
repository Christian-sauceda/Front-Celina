import { useDispatch, useSelector } from "react-redux"
import { backCelinaApi } from "../../api"

// Slices
import { onChecking, onLogin, onLogout } from "../../store"

export const useAuthStore = () => {
    const { statusAuth, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch()

    const startLogin = async (sendData) => {
        dispatch(onChecking())

        try {
            const {data} = await backCelinaApi.post('/login', sendData);
            const {token} = data;
            // console.log('RESP >> ', data)
            // console.log('token >> ', token)
            localStorage.setItem('token', token)
            localStorage.setItem('token-init-date', new Date().getTime() );

            // TODO Validar el token del usuario y a la vez necesito utilizar esos mismos datos para traer las empreas solamente del usuarios logeado....
            // console.log('DATA >> ', data)
            dispatch(onLogin(data))
            
        } catch (error) {
            console.log(error)
            dispatch(onLogout('Credenciales incorrectas.'))
        }
    }

    const checkoutAuthToken = async () => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogout())

        try {
            const {data} = await backCelinaApi.post('/usuarios/renew')
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin(data))

        } catch (error) {
            console.log(error)
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogout())
    }

  return {
    //* Properties
    statusAuth,
    user,
    errorMessage,

   //* Metodos
   startLogin,
   startLogout,
   checkoutAuthToken
  }
}
