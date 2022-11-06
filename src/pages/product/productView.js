// import Product from '../../component/product/productCompo';
import { useState } from "react";
import { useParams } from "react-router-dom"
import useAxiosGet from '../../component/hooks/useAxiosGet';
import "./productView.css";

export default function ProductView(){

    const { idProduct} = useParams();
    const dataGet = useAxiosGet(`${process.env.REACT_APP_API_URL}/product/${idProduct}`);

    const dataProduct = dataGet.data;
    const isLoadingProdcut = dataGet.isLoading;

    console.log("dataProduct = ", dataProduct)
   
    return(
        <>
        <h2>ghjlnk</h2>
            {isLoadingProdcut ? (
                <p>chargement des données en cours</p>
            ): (
                <h3>{dataProduct.title}</h3>
            )} 
            <p>coucou</p>
            
        </>
    );
};