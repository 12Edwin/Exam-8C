import axios from "axios";

export const getData = async (data) =>{
    try{
        const url = 'http://localhost:8081/api/vehiculos/page'
        const res = await axios.get(
            url,
            {params: data}
        )
        return res.data
    }catch (e){
        console.log(e)
    }
}