import React from "react"; 

export default function Nota(props){

    return(
        <div> 
          <legend>Informe a nota: {props.num}</legend>
          <input type="text" name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e)}/>
        
        </div>
    )
}

/*
A função somaNotas foi criada no arquivo pai App.js no return
OBS: sempre que usar props as funções serao executada no arquivo pai.

foi acresentado o parametro (e) pra linka com as funções do arquivo app.js

*/