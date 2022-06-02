import React from "react";

export default function Numero(props){
    return(
        <p>
            <p>Valor do state em Numeros.js: {props.num}</p>
            <button className="btn" onClick={()=>props.setNum(props.num+10)}>Botão soma 10 no Numero.js</button>
        </p>
    )

}