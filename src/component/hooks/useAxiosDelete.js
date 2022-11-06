import axios from "axios"
import {useEffect, useState} from "react"

export default function useAxiosDelete(url){
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const deleteData = async ()=>{
        await axios.delete(url)
        
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(()=>setIsLoading(false))
    }

    return {data, error, isLoading, deleteData}
}