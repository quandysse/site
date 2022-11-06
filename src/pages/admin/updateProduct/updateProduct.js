import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from '../../../component/productForm';
import useAxiosGet from '../../../component/hooks/useAxiosGet';
import useAxiosPut from '../../../component/hooks/useAxiosPut';


export default function UpdateProduct(){

    const {idProduct}  = useParams()
    const getData  = useAxiosGet(`${process.env.REACT_APP_API_URL}/product/${idProduct}`);

    const datatProduct = getData.data;

    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[selectedFile, setSelectedFile] = useState();
    const[price, setPrice] = useState('');
    // const [selectedFile, setSelectedFile] = useState('')

    const navigate = useNavigate();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("price", price);

    const {data, error, isLoading, putData}=  useAxiosPut(`${process.env.REACT_APP_API_URL}/product/${idProduct}`, formData,{headers: {'Content-Type': 'multipart/form-data'}});

    useEffect( () => {
        if(datatProduct){
            setTitle(datatProduct.title)
            setDescription(datatProduct.description)
            setDescription(datatProduct.price)
        }
    } ,[datatProduct])

    const handleSubmit = (e) => {
        e.preventDefault()
        putData()
        console.log("/Admin")
    }

    return(
        <>
            <h2>update product</h2>

            {/* {data && data.message} */}
            {/* si c'est bien posté ca va l'affciher */}
            {/* <h3>Modifie ton produit</h3> */}
                {/* <br/> */}

            {/* <ProductForm handleSubmit={handleSubmit} title={title} seTtitle={setTitle} description={description} setDescription={setDescription} selectedFile={selectedFile} setSelectedFile={setSelectedFile} price={price} setPrice={setPrice} textButton={"Modifier"}/>    */}
            
            <h3>Modifie</h3>
            <br/>
            {recetteId}
            <form onSubmit={handleSubmit}>
                <label for="title">Titre :</label>
                <br/>
                <input type="text" id="title" value={title} name="title" onChange={(e)=> setTitle(e.target.value)}/>
                <br/>
                <label for="description">Description:</label>
                <br/>
                <input type="text" id="description" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <br/><br/>
                <input type="file" id="file" onChange={(e)=> setSelectedFile(e.target.files[0])}/>
           
                {selectedFile &&
                <img alt="preview" class="preview" src={URL.createObjectURL(selectedFile)}/>}
               
                <button type="submit" > Ajouter </button>
            </form>
      

   
        </>
    )
}