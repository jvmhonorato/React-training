import React, { useState } from "react";

const carros=[
    {categoria:"Esporte", preco:"110000", modelo:"Golf GTi"},
    {categoria:"Esporte", preco:"120000", modelo:"camaro"},
    {categoria:"SUV", preco:"85000", modelo:"HRV"},
    {categoria:"SUV", preco:"83000", modelo:"T-Cross"},
    {categoria:"Utilitario", preco:"125000", modelo:"Hilux"},
    {categoria:"Utilitario", preco:"90000", modelo:"Ranger"},
]
//Essa função linhas() vai percorrer dos os carros do Array  e pra cada carro com a categoria declada no input ele converterá em caicxa alta e ira retonar uma tablea só com os carros com a categoria declarada
const linhas=(cat)=>{
    const li=[]
carros.forEach(
    (carro)=>{
        if(carro.categoria.toUpperCase()== cat.toUpperCase() || cat.toUpperCase() ==''){
            li.push(
                <tr>
                    <td>{carro.categoria}</td>
                    <td>{carro.preco}</td>
                    <td>{carro.modelo}</td>
                </tr>
            )
        }
    }
)

    return li

    
}
//essa função ira gerar uma tabela com os elementos do Arrey
const tabelaCarro=(cat)=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
        <thead>
            <tr>
                <th>Categoria</th><th>Preço</th><th>modelo</th>
            </tr>
        </thead>
        <tbody>
            {linhas(cat)}
        </tbody>
    </table>
    )


}
//essa função ira carregar no retunr um label(rotulo) e um input com o auxilio do usestate
const pesquisaCategoria=(cat,scat)=>{
    return(
        <div>
            <label>Digite uma categoria</label>
            <input type='text' value={cat} onChange={(e)=>scat(e.target.value)}/>
        </div>
    )
}




export default function Tabela(){
    const [categoria,setCategoria]=useState('')
    return(
        <>
        {pesquisaCategoria(categoria,setCategoria)}
        <br/>
        {tabelaCarro(categoria)}
    

        </>
    )
}