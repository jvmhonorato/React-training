import React from "react";

export default function Altura(props){
    return( 

        <div>
            <label>
                Altura
                <input type="text" value={props.a} onChange={(a)=>{props.sa(a.target.value)}}/>
            </label>
        </div>
    )

}

/*
Na aula 32 conevertemos componente função por componente de class dessa forma:

import React from "react";

export default class Altura extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            
           <div>
            <label>
                Altura
                <input type="text" value={this.props.a} onChange={(a)=>{this.props.sa(a.target.value)}}/>
            </label>
        </div>

        )
    }
}

//quando a classe tiver uma função que necessita de props adicionar o construtor() e o super(), e lembrando que no caso de componentes de classe temos que usar o this.props.a nos atributos!




*/