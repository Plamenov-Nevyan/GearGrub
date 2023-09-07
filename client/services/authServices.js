import { apiRequests } from "./api.js";
import { authOperations } from "../utils/authOperations.js";

export async function registerUser(data){
    data.action = 'register'
    let userResponse = await apiRequests.post(data)
    if(userResponse.hasOwnProperty(`url`)){
        err = await userResponse.json()
        err.status = `not-ok`
        return err
    }
    else{
        userResponse.status = `ok`
        authOperations.createSession(userResponse)
        return userResponse
    }
}

export async function loginUser(data){
    data.action = 'login'
    let userResponse = await apiRequests.post(data)
    if(userResponse.hasOwnProperty(`url`)){
        err = await userResponse.json()
        err.status = `not-ok`
        return err
    }
    else{
        userResponse.status = `ok`
        authOperations.createSession(userResponse)
        return userResponse
    }
}

export async function destroyBackendSession(){
    await apiRequests.del(null, 'delete=deleteSession')
}