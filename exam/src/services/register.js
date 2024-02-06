import axios from "axios";

export const register = async (data) =>{
    try{
        const url = 'http://localhost:8081/api/vehiculos'
        const res = await axios.post(
            url,
            data
        )
        return res.data
    }catch (e){
        console.log(e)
    }
}