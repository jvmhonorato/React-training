import React from "react";
import Globais from "./Globais";

export default function  Info(){
    return(
        <>
         <p>canal: {Globais.canal} </p>
         <p>curso: {Globais.curso} </p>
         <p>ano: {Globais.ano} </p>
         </>
    );
};

/*
Importando o arquibo Globais.js que contem as variáveis de canal.curso e nome. Qualquer  componente que importar esse arquivo Info.js ou seja esse arquivo Info.js é intermediário entre o arquivo que tem as variávei(Globais.js) e o arquivo do componente  que vai carregar o return desse arquivo Info.js que é o (App.js)
*/