import "./productCompo.css";

export default function Product(props){
 
    
   
    return(
        

        <div className="product" >
            <div className="img">
                <img src={props.url} alt="" width="100%" ></img>

            </div>
            <div className="text-product">

                <div className="title-description-product">
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                    <p className="id">
                       Id article : {props._id}
                    </p>
                </div>

                <div className="price-product">
                    <h2 className="price">
                        {props.price} €
                    </h2>
                    <p>Retour GRATUIT</p>
                    {/* <button className="btn" >
                        Acheter
                    </button> */}

                </div>
                
            </div>

           
        </div>


    )
}