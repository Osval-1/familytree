export const setToken = (authenticationToken) =>{
    localStorage.setItem("token",authenticationToken)
}
export const getToken = ()=>{
   const token =  localStorage.getItem("token")
   return token
}