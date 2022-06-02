import React from "react";

export default function Resultado(props){
    return(
        <div>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>{props.somaNotas >=60 ? "Aprovado" : "Reprovado"}</p>


        </div>
    )

}
/*
A função somaNotas foi criada no arquivo pai App.js no return
OBS: sempre que usar props as funções serao executada no arquivo pai.

*/