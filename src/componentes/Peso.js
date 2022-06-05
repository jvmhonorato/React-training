import React from "react";

export default function Peso(props){
    return(
       
            <div>
                <label>
                    Peso
                    <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
                </label>
            </div>
        )
    
}

/*
Na aula 32 conevertemos componente função por componente de class dessa forma:

import React from "react";

export default class Peso extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            
            <div>
                <label>
                    Peso
                    <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
                </label>
            </div>

        )
    }
}

//quando a classe tiver uma função que necessita de props adicionar o construtor() e o super(), e lembrando que no caso de componentes de classe temos que usar o this.props.a nos atributos!




*/