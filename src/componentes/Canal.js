import React from "react";

export default function Canal(){
    return(
<>
<h1>Conteúdo dentro de Canal.js!<br/>
     conteúdo filho de Caixa.js e neto de App.js</h1>
</>

    );
}
/*Esse componente será chamdo dentro da tag <Caixa><Canal/></Caixa> dessa forma o props no componente Caixa.js será aproveitado
 */