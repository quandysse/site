import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import useAxiosDelete from "../../../component/hooks/useAxiosDelete";
import useAxiosGet from "../../../component/hooks/useAxiosGet";
import "./tabProduct.css";


export default function TabProduct(){

    const {data, error, isLoading, refreshData} = useAxiosGet(`${process.env.REACT_APP_API_URL}/product`)
    //je récupère les produits 
  
    const [productId, setProductId] = useState("")
    //l'id c'est quelque chose qui peut changer donc on le met dans un state

    const {data : dataDelete, error: errorDelete, isLoading :isLoadingDelete, deleteData} = useAxiosDelete(`${process.env.REACT_APP_API_URL}/product/${productId}`)

    useEffect(()=>{
        if (productId){
            //si c'est vide ça retourne false
            deleteData().then(()=> refreshData()) //on recharge les données automatiquement 
        }
    },[productId])
    //lorsque l'on clique sur le btn supprimmé on met à jour l'id de la catégorie à supprimer. On fait en sorte que à chaque fois qu'on a un nouvel id à suppr on supprime

   
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>

            <tbody>
                {data && data.map(product=> (
                   
                <tr key={product._id}> 
                    <td>{product._id}</td>
                    <td>{product.title}</td>
                    <td><Link to={"/UpdateProduct/"+product._id}>Modifier</Link></td>
                    <td><button onClick={()=> setProductId(product._id)}>Supprimer</button></td>
                    
                </tr>))}

            </tbody>
        </table>
       
    )
}