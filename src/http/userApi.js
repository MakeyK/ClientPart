import {$authHost, $host} from "./index";
import   {jwtDecode} from 'jwt-decode';

export const registration = async (login, paasword) => {
    const {data} = await $host.post('api/auth/registration', {login, paasword, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, paasword) => {
    const {data} = await $host.post('api/auth/login', {login, paasword})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/auth/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}