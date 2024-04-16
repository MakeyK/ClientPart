import {$authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (email, password, password_check) => {
const {data} = await $host.post('cwh/auth/registration', {email, password, password_check})
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}

export const login = async (email, password) => {
const {data} = await $host.post('cwh/auth/login', {email, password})
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}

export const check = async () => {
const {data} = await $authHost.get('cwh/auth/auth')
localStorage.setItem('token', data.token)
return jwtDecode(data.token)
}
export const changePassword = async (email, old_password, new_password, new_password_check) => {
    const {data} = await $authHost.patch('cwh/edit/change_password', {email, old_password, new_password, new_password_check})
    return 0
}

export const selectAllFiles = async () => {
    try {
        const {data} = await $authHost.get(`cwh/select/all_user_files`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        // console.log("baf")
        console.log(data)
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}