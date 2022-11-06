import useAxiosPut from '../../component/useAxiosPut/useAxiosPut';
import useAxiosGet from '../../component/hooks/useAxiosGet';
import { useParams } from 'react-router-dom';

export default function UpdateProduct(){
    let {productId}  = useParams()
    const dataProduct  = useAxiosGet(`${process.env.REACT_APP_API_URL}/product/:idProduct${productId}`).data
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const[description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const formData = new FormData()
    formData.append("title", title)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("image", selectedFile)
    const {data, error, isLoading, putData}=  useAxiosPut(`${process.env.REACT_APP_API_URL}/product/:idProduct${productId}`, formData,{headers: {'Content-Type': 'multipart/form-data'}})

    useEffect(()=>{
        if(dataProduct){
            setTitle(dataProduct.title)
            setDescription(dataProduct.description)
        }
    } ,[dataProduct])

    const handleSubmit = (e)=>{
        e.preventDefault()
        putData()
        console.log(error)
    }

    return(
        <h3>Modifier</h3>

    )
}