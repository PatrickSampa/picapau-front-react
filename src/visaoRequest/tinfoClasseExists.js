import axios from "axios";
import { picapauApiSapiens } from "../global";

export async function tinfoClasseExist(data){


    const UrlLogin = "http://localhost:3000/samir/getTinfoClasseExist"

    try{
        const response = await axios.post(`${picapauApiSapiens}getTinfoClasseExist`,data);
        
        if(response.status == 200){
            return Promise.resolve(response.data);
        }else{
            return Promise.reject(new Error("erro ai fazer login sapiens"))
        }
    }catch(e){
        console.log("erro login sapiens")
        return Promise.reject(new Error("erro no login"))
    }
}