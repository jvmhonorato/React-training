import React,{useState} from "react";

export default function Storage(){
const[nome,setNome]=useState()

const armazenar = (chave,valor)=>{
    localStorage.setItem(chave,valor)
}
const consultar=(chave)=>{
    alert(localStorage.getItem(chave))
}
const apagar=(chave)=>{
    localStorage.removeItem(chave)
}


return (
        <>
            <label>Digite um nome:   </label><br/>
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input><br/>
            <button onClick={()=>armazenar('ls_nome',nome)}>Gravar nome</button>
            <button onClick={()=>consultar('ls_nome')}>Ver nome</button>
            <button onClick={()=>apagar('ls_nome')}>Apagar nome</button>
        </>

)

}

/*
1: O comando localStorage serve pra criar chave, pegar chave e remover chave. Se um novo setitem for chamado ele substituíra o primeiro
localStorage.setItem('nome','Victor')
localStorage.getItem('nome')
localStorage.removeItem('nome')
2: em seguida criamos um programinha pra simular os 3 comandos.
 Criamos um state e 3 funções uma pra armazenar a chave com dois parâmetros, outra pra consultar e a terceira pra remover.
 3: no return criamos um <label>, em seguida um <input> projetado pra pegar o valor com o evento onChange():<input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
 ao click do botão da tag <button> o evento onClick irá chamr a função correspondente : armazenar, consultar e remover.

 OBS:'ls_nome' é o nome que demos a chave e "nome" é a variável da função useState no que cujo os dados que forem escritos no input será atribuído a ela. ou seja nome= o que for excrito no input do navegador
 4: a função armazenar vai pegar 'nome' que no momento será o que foi digitado no input e associara a chave pra que a mesma possa ser chamada na função consulta e deletada na função remover.* 

*/