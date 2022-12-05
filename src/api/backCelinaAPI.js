
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

const { API_URL_DEV } = getEnvVariables()

// console.log('AQUI >> ', getEnvVariables())
// console.log('URL ENV >> ', API_URL_DEV)

export const backCelinaApi = axios.create({
    baseURL: 'http://localhost:3000'
})

backCelinaApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    return config;
})