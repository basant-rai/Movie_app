import { API } from "../config"

export const signUp = async (user_name,email,password,address,number)=>{
    let user = {user_name,email,password,address,number}
    console.log(user)
    try {
        const res = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(user)
        })
        return await res.json()
    } catch (err) {
        return err
    }
}

export const logIn = async (email,password)=>{
    let user_login ={email,password}
    try {
        const res = await fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user_login)
        })
         const data = await res.json();
        return data
    } catch (err) {
        return err;
    }
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