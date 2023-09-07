import { apiRequests } from "./api.js";

export async function registerUser(data){
    let userResponse = await apiRequests.post(data)
    if(userResponse.hasOwnProperty(`url`)){
        err = await userResponse.json()
        err.status = `not-ok`
        return err
    }
    else{
        userResponse.status = `ok`
        authOperations.saveUser(userResponse)
        return userResponse
    }
}