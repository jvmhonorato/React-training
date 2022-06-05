import React from "react";


export default function ResultadoIMC(props){

    return(
        <div>
            <p>Resultado: {props.r.toFixed(2)}</p>
        </div>
    )
}

/*
Na aula 32 convertemos os componetes funções para componentes classes dessa forma:

import React from "react";

export default class ResultadoIMC extends React.Component{
    construtor(){
        super
    }
    render(){
        return(
        <div>
            <p>Resultado: {this.props.r.toFixed(2)}</p>
        </div>
            
        )
    }
}
OBS: sempre usar que usar atributos usar this.props.a qunado for componente class


*/