import React from "react";
import { Link } from 'react-router-dom';
import "./card.css";

export default function Card(props){


    return(

        <div className="card" >
            <div className="img">
                <img src={props.url} alt="" width="100%" height="200px"></img>

            </div>
            <div className="text-card">

                <p className="title-card">
                    {props.title}
                </p>
                <div className="price-btn-card">
                    <h2 className="price">
                        {props.price} €
                    </h2>

                    <p className="card-button">
                        <Link to={"ProductView/"+props.id}>
                            Click
                        </Link>
                    </p>
                  
                    

                </div>
                
            </div>

           
        </div>


    )
}