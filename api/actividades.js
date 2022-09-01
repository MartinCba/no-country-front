import { BASE_PATH } from "../utils/constants";
import {authFetch} from "../utils/fetchAuth";



export async function getAllActivity(){
    try {
        const url = `${BASE_PATH}/activity`;
        const params = { 
            method:"GET",
            headers:{   
                "Content-Type":"application/json",                 
            },
        }

        const response = await authFetch(url,params);
        return response ? response : null;
    } catch (error) {
        return null;
    }
}