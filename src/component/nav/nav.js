import { Link } from 'react-router-dom';
import "./nav.css";

export default function Nav(){

    return(
        <header>
            <div className="brand"><a href="/"></a></div>

            <nav>
                <ul>
                    <div className="nav-list">

                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="/AddProduct">Ajouter des articles</Link></li>
            
                        <li><Link to="/TabProduct">Admin</Link></li>

                    </div>

              
                    
                </ul>
            </nav>
        </header>
    )
}