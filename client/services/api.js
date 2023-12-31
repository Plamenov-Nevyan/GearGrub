// import { authOperations } from "../utils/authentication.js"
const url = `http://localhost/GearGrub/server/main.php`

async function apiCall(method = `GET`,data, query){
    const options = {
        method,
        headers: {}
    }
    // const user = authOperations.getUser()
    if(data !== undefined && data !== null){
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    // if(user){
    //     options.headers['X-Authorization'] = authOperations.getToken()
    // }
try{
   let resp = query ? await fetch(`${url}?${query}`, options) : await fetch(`${url}`, options)
   if(!resp.ok){
    //    if(resp.status == 403){authOperations.clearStorage()}
       if(resp.status == 404){return resp}
       let error = await resp.json()
       throw new Error(error.message)
   }
   if(resp.status == 204){return resp}
   if(method !== 'DELETE'){
    return resp.json()
   }
}catch(err){
     alert(err.message)
     throw new Error(err.message)
}
} 
const get = apiCall.bind(null, `GET`)
const post = apiCall.bind(null, `POST`)
const put = apiCall.bind(null, `PUT`)
const del = apiCall.bind(null, `DELETE`)
const patch = apiCall.bind(null, `PATCH`)

export const apiRequests = {
    get,
    post,
    put,
    patch,
    del
}