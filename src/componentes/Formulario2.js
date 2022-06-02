import React, { useState } from "react";

export default function Formulario2(){
const[form2,setForm2]=useState({"nome":"","curso":"","ano":""})
const handlFormChange=(e)=>{
    if(e.target.getAttribute('name')=='fname'){
        setForm2({"nome":e.target.value,"curso":form2.curso,"ano":form2.ano})
    }else if(e.target.getAttribute('name')=='fcurso'){
        setForm2({"nome":form2.nome,"curso":e.target.value,"ano":form2.ano})
    } else if(e.target.getAttribute('name')=='fano'){
        setForm2({"nome":form2.nome, "curso":form2.curso,"ano":e.target.value})

    }    

}
return(
    <>
        <label>Nome</label>
        <input type="text" name="fname" value={form2.nome} onChange={(e)=>handlFormChange(e)}></input>
        <label>Curso</label>
        <input type="text" name="fcurso" value={form2.curso} onChange={(e)=>handlFormChange(e)}></input>
        <label>Ano</label>
        <input type="text" name="fano" value={form2.ano} onChange={(e)=>handlFormChange(e)}></input>

        <p>Nome digitado: {form2.nome}</p>
        <p>Curso digitado: {form2.curso}</p>
        <p>Ano digitado: {form2.ano}</p>


    </>
)



}
/*
Nessa aula vamos criar um objeto dentro do state com intuito de usar um state pra varios elementos do formulario
1: criamos o state: const[form2,setForm2]=useState({"nome":"","curso":"","ano":""})
2: depois no return criamos as tags <label> e <input>
3: no parâmetro value do input associamos o state(form2)
ao input e label correspondente
4: fazemos a mesma coisa nas tags <p> abaixo pra o retorno dos dados aparecerem no navegador
5: em seguida crimaos o evento com o: const handlFormChange=(e)=>{} 
6: depois passamos a função arrow function para o evento onChange dentro da tag <input> desse jeito: onChange={(e)=>handlFormChange(e)}
7: por ultimo atribuimos condicionais IF e ELSE pra os eventos pra que retornem o valor somente do que foi digitado.







*/