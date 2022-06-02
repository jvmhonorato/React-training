import React from "react";
import logo from './imgs/perfil.jpg'
export default function Header(){
    return(
        <header>
             <div className="container">
                 <img src={logo}/>
           </div>
            <h1 style={{textAlign:'center'}} >Primeiro componente REACT</h1>

        </header>
    )
}