import { API } from "../config"

export const signUp = (user_name,email,password,address,number)=>{
    let user = {user_name,email,password,address,number}
    console.log(user)
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const logIn = (email,password)=>{
    let user_login ={email,password}
    console.log(user_login);
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(user_login)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const authenticate =(data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}

export const isAuthenticated =()=>{
    return localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')):false
}

export const signOut =()=>{
    return localStorage.removeItem('jwt');
}