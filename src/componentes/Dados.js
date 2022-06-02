import React from "react";

export default function Dados(props){
    const n1 = 40
    const n2 = 20
    const n3 = 60
    const n4 = 50
    return(

        <>
        <p>Canal: {props.canal()}</p>
        <p>Youtube: {props.youtube}</p>
        <p>Curso: {props.curso}</p>
        <p>{`A soma de ${n1} com ${n2} é igual a ${props.somar(n1,n2) }`}</p>
        <p>{`A subtração de ${n1} com ${n2} é igual a :${props.sub(n1,n2)}`}</p>


        </>
    )
}