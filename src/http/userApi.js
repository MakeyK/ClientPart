import {$authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (login, password) => {
    const {data} = await $host.post('cwh/auth/registration', {login, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('cwh/auth/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('cwh/auth/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}