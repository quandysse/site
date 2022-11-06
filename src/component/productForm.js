import "./productForm.css";
export default function ProductForm(props){

    return(
        <>

            <form className="add-product-form" onSubmit={props.handleSubmit} >
            
                {/* <div className="title-price"> */}
                    <label for="last-name">Titre de l'article :</label>
                    <br/>
                    <input type="text" id="title"  name="title"   value={props.title} onChange={(e)=> props.setTitle(e.target.value)}/>
                    <br/>
                    <label for="last-name">Prix :</label>
                    <br/>
                    <input type="number" id="price"  name="price"  value={props.price}  onChange={(e)=> props.setPrice(e.target.value)}/>
                    <br/>
                {/* </div> */}

                {/* <div className="description-image"> */}
                    <label for="first-name">Description</label>
                    <br/>
                    <input type="text" id="description" name="description" value={props.description} onChange={(e)=> props.setDescription(e.target.value)}/>
                    <br/>
                    <label> Photo de l'article</label> <br/>
                    <input type="file" id="file" onChange={(e)=> props.setSelectedFile(e.target.files[0])}/>
                    {props.selectedFile &&
                    <img alt="preview" class="preview" src={URL.createObjectURL(props.selectedFile)}/>}
                    <br/>
                {/* </div > */}

                <button type="submit"> {props.textButton} </button>
                
            </form>

        </>
    )
}