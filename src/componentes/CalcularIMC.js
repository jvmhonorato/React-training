import React from "react";

export default function CalcularIMC(props){
    const calc=()=>{
       props.sr(props.p/(props.a*props.a))
    }
    return(
        <div>
          <button onClick={calc}>Calcular</button>
      </div>
    )


}

/*
Na aula 32 conevertemos componente função por componente de class, como a função calc está nativa e nao está no arquivo pai App.js é necessario o uso do BIND pra fundir,  dessa forma:

import React from "react";

export default class CaucularIMC extends React.Component{
  constructor(){
    super()
    this.calc=this.props.p/(this.props.a*this.props.a)
  }
  fcalc=()=>{
    const r=this.props.p/(this.props.a*this.props.a)
    this.props.sr(r)
    //console.log(r)
  } 
  render(){
    return(
      <div>
          <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}

*/