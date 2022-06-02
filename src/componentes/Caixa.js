import React from "react";
export default function Caixa(props){
    return (
        <>
            <p>{props.site}</p>
            {props.children}
           
        </>
    )
}

/*
Adiciona um   {props.children} pra que as tags dentro de <Caixa></Caixa> em App.js apareçam no navegador


*/