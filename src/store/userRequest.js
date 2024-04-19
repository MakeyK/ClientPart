import { makeAutoObservable } from "mobx"; 
 
export default class UserRequest { 
constructor(){ 
    this.userRequest= []
    makeAutoObservable(this) 
} 
setUserRequest(userRequest) 
{ 
    this.userRequest=userRequest 
} 
getUser() 
{ 
    return this.userRequest 
}}