import {getToken,hasExpiredToken} from "../api/token";


export async function authFetch(url, params, logout){
    const token = getToken();
    if(!token){
        //usuario no logeado
        logout()
    } else{
        if(hasExpiredToken(token)){
            //token caducado.
            logout();
        }else{
            //usuario logeado con token sin expirar.
            
            // Armamos los paramas del fetch con el params argumento.
            const paramsTemp ={
                ...params,
                headers:{
                    ...params?.headers,
                    "auth-token":`${token}`,
                },  
            };
            try {
                const response = await fetch(url, paramsTemp);
                
                const result = await response.json();
                return result;
            } catch (error) {
                return null;
            }
        }
    }
}