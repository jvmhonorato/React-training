import React, {useEffect, useState } from "react";

export default function Contagem(){

const [contagem,setContagem]=useState(0)
useEffect(
    ()=>{console.log('Página carregada')
        document.title='Contagem'+contagem
}
)

return (
    <>  
    <p>Cotagem: {contagem}</p>
    <button onClick={()=>setContagem(contagem+1)}>Contar</button>

    </>
)

}
/*
1: O useEffect vai ser automaticamente ser chamado toda vez que a pagina for carregada/atualizada no exemplo acima apareceré "pagina carregada" no console toda vez que o butão for acionado ou a pagina atualizada em outras palavras voce pode programar o useEffect  ser chamado toda vez que a página for carregada/atualizada.
2: adcionamos um: document.title='Contagem'+contagem dentro do bloco do useEffect pra mostrar a contagem na aba de titulo do navegador


*/