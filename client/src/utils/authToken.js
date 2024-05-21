export const getToken = ()=>{
   const token =  localStorage.getItem("token")
   return token
}
   export const logout = ()=>{
      localStorage.removeItem("token")
}