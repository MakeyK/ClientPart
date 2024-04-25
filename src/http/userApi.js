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
        return data.user_files
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const selectAllFilesNew = async () => {
    try {
        const {data} = await $authHost.get(`cwh/select/all_user_files?order=new`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data.user_files
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const selectAllFilesOld = async () => {
    try {
        const {data} = await $authHost.get(`cwh/select/all_user_files?order=old`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data.user_files
        
    } catch (e) {
        alert(e.response.data.message)
    }
}
export const fetch_avatar = async () => {
    try {
        const {data} = await $authHost.get('cwh/select/avatar', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}
export const getProfile = async () => {
    try {
        const {data} = await $authHost.get('cwh/select/profile', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}
export const changeProfile = async (nickname, email) => {
    try {
        const {data} = await $authHost.patch('cwh/edit/profile', {nickname, email},{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const downloadFile = async (id_file) => {
    try {
        const {data} = await $authHost.get('cwh/download/file', {id_file},{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const deleteFile = async (id_file) => {
    try {
        const {data} = await $authHost.delete('cwh/delete/destroy_file',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            data: {id_file}
        })
        return data  
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const removeFile = async (id_file) => {
    try {
        const {data} = await $authHost.post('cwh/delete/remove_file',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            data: {id_file}
        })
        return data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const selectremovedFile = async () => {
    try {
        const {data} = await $authHost.get('cwh/select/removed_files',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const deleteAllFiles = async (id_file) => {
    try {
        const {data} = await $authHost.delete('cwh/delete/destroy_all_file',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return data  
    } catch (e) {
        alert(e.response.data.message)
    }
}
// export const deleteFile = async (id_file) => {
//     const {data} = await $host.delete('cwh/delete/destroy_file', {id_file})
// },{
//             headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//             })
//             return data