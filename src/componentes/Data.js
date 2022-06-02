import React from "react";

export default function data(props){
    return(
        <>
        <p>Fruta: {props.fruta}</p>
        <p>Legume: {props.legume}</p>
        <p>Verduras: {props.verdura}</p>
        <p>Grãos: {props.grão}</p>
        <p>Massas: {props.massas}</p>
        </>
    )

}