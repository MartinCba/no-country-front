import {getToken,hasExpiredToken} from "../api/token";


export async function authFetch(url, params, logout){
    const token = getToken();
    if(!token){
        //usuario no logeado
        logout()
    }else{
        if(hasExpiredToken(token)){
            //token caducado.
            logout();
        }else{
            const paramsTemp ={
                ...params,
                headers:{
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                },   
            };
            try {
                const response = await fetch(url, paramsTemp);
                const result = response.json();
                return result;
            } catch (error) {
                return error;
            }
        }
    }
}