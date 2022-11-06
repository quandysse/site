import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../nav/nav'


export default function Layout(){
    return (
       <>
    
           <Nav/>
       
       <main className="container" style={{height: "100%"}}>
            <Outlet/> 
            {/* Avec outlet on afficher ce qu'il y a dans l'enfant de la route */}
        </main>
        </>
    )
}