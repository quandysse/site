import "./addProduct.css";
import {useState} from 'react';
import useAxiosPost from '../../component/hooks/useAxiosPost';
import ProductForm from '../../component/productForm';


export default function AddProduct(){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [price, setPrice] = useState();
    const formData = new FormData()
    formData.append("image", selectedFile)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("price", price)
    const {data, error, isLoading, postData} = useAxiosPost(`${process.env.REACT_APP_API_URL}/product`,formData,{headers: {'Content-Type': 'multipart/form-data'}})

    const handleSubmit = e => {
        e.preventDefault();
        postData()
    }

    return(
        <>
        <div className="addproduct-container">

        <div className="title-addproduct">

            <h2>Mes Produits</h2>

            <p>Ajoute ton Article à l'aide du forulaire.</p>
                <br/>

        </div>

                <ProductForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} selectedFile={selectedFile} setSelectedFile={setSelectedFile} textButton={"ajouter"}/>  
                
        </div>
        </>
    )
}