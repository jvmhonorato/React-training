import React from "react";

export default function Carros(props){
    return(

        <>
        <p>Fiat: {props.Siena()}</p>
        <p>Ford: {props.Fusion}</p>
        <p>Chevrolet: {props.Corsa}</p>
        <p>Volksvagem: {props.Virtus}</p>
        <p>Porche: {props.Panamera}</p>
        </>
    )

}