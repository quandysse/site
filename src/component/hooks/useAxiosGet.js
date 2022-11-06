// on va faire un hooks personnaliser pour pourvoir utiliser l'api sur 1 seule ligne



import axios from "axios";
import { useEffect, useState } from "react";


export default function useAxiosGet(url){
    const[data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const refreshData = () =>{
        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => setError(error.message))
        .finally(()=> setIsLoading(false))
    }
    useEffect(()=> {
        refreshData()
        
        
    }
    ,[])
    
    // [] = pour que ça s'effectue qu'une seule fois
    return {data, error, isLoading, refreshData}
    //on retourne les valeurs pour pouvoir les utiliser ailleur apres
}