import "./home.css";
import Card from '../../component/card/card';
import useAxiosGet from '../../component/hooks/useAxiosGet';



export default function Home(){


    const {data, error, isLoading} = useAxiosGet(`${process.env.REACT_APP_API_URL}/product`)
    
    //recup les articles

    console.log(data)

    return(

        <>
      
        <div className="container-all">
            <div className="container1">

                <div className="container2">
                    <h1>Les meilleurs produits <br/> 
                        aux meilleur prix
                    </h1>
                    <button>Voir tout les produits</button>
                </div>

                <div className="container3">

                </div>

            </div>

            <div className="container4">

                <h2 className="title2"> Nos produits</h2>

                <div className="cards-container">

                    {data && data.map((product)=> (<Card title={product.title} url={product.imageUrl} price={product.price} description={product.description}/>))} 

                </div>

                

            </div>

        </div>
        </>
    )
}