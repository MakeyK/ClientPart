import {makeAutoObservable} from "mobx";

export default class UserStore
{
    constructor() {
        this._isAuth = true
        this._user = {}
        this._avatar = []
        this._nickname = []
        this._email = []
        makeAutoObservable (this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._isAuth = user
    }
    getisAuth() {
        return this._isAuth
    }
    getuser() {
        return this._user
    }
    setAvatar(avatar)
    {
        this._avatar=avatar
    }
    getAvatar()
    {
        return this._avatar
    }
    getNickname()
    {
        return this._nickname
    }
    setNickname(nickname)
    {
        this._nickname=nickname
    }
    getEmail()
    {   
        return this._email
    }
    setEmail(email)
    {
        this._email=email
    }
}