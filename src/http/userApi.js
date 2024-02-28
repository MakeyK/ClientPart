import {$authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (email, password, password_check) => {
const {data} = await $host.post('home/auth/registration', {email, password, password_check})
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}

export const login = async (email, password) => {
const {data} = await $host.post('home/auth/login', {email, password})
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}

export const check = async () => {
const {data} = await $authHost.get('cwh/auth/auth' )
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}