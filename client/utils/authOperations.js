// function getToken(){
//     let user = JSON.parse(localStorage.getItem(`user`))
//     return user.accessToken
// }
function getSession(){
    let session = sessionStorage.getItem(`session`)
    return session ? JSON.parse(session) : null
}
function createSession(sessionData){
   sessionStorage.setItem(`session`, JSON.stringify(sessionData))
}
function clearSession(){
    sessionStorage.clear()
}
// function navUpdate(user = false){
//     const welcomeMsg = document.querySelector(`#welcome-message`)
//     const guestLinks = document.querySelector(`#guest`)
//     const userLinks = document.querySelector(`#profile`)
    
//     if(user){
//            userLinks.style.display = `inline-block`
//            guestLinks.style.display = `none` 
//           welcomeMsg.textContent = `Welcome, ${this.getUser().username}`
//        }
//     else{
//         guestLinks.style.display = `inline-block`
//         userLinks.style.display = `none`
     
//     }
// }
export const authOperations = {
    // getToken,
    createSession,
    getSession,
    clearSession,
    // navUpdate
}