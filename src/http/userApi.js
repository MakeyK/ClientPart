import {$authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (nickname, tag_user, email, password) => {
    const {data} = await $host.post('home/auth/registration', {nickname, tag_user, email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('/home/auth/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('cwh/auth/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}