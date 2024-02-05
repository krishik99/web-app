
const BASE_URL = import.meta.env.VITE_API_BASE_URL
export const register = async (formData) => {
  const response =  await fetch(BASE_URL+'api/user/register',{
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(formData)
    })
    // const responseBody = response.json();
    // if(!response.ok){
    //     throw new Error(responseBody.message)
    // }
     return response;
}

export const login = async (formData) => {
    const response =  await fetch(BASE_URL+'api/auth/login',{
          method:'POST',
          credentials:"include",
          headers:{
              "Content-Type" : "application/json"
          },
          body:JSON.stringify(formData)
      })
       return response;
}

export const validateToken = async () => {
    const response =  await fetch(BASE_URL+'api/auth/validate-token',{
        credentials:"include"
    })
    const user = await response.json()
    return user;
}

export const inValidateToken = async () => {
    const response =  await fetch(BASE_URL+'api/auth/invalidate-token',{
        credentials:"include"
    })
    const message = await response.json();
    console.log(message)
    return message;
}