import React, { useState } from "react";

export default function Formulario() {
const[nome,setNome]=useState('');
const[carro, setCarro]=useState('');



    return(
        <>
            <label>Digite seu nome : </label>
            <input 
            type="text" 
            name="fnome"
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            />
            <p>Nome digitado:  {nome}</p>
            <label>Selecione um carro</label>
           <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='HRV'>HRV</option>
                <option value='GolfGTI'>GolfGTI</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option> 



           </select>
           <p>carro selecionado:  {carro}</p>     
                
            
            
           

        </>
    );

}


//Outra maneira de trabalhar usando o handle




/*import React, { useState } from "react";

export default function Formulario(){
const[nome,setNome]=useState('')
const handleChangeNome=(e)=>{
    setNome(e.target.value)
}


    return(
        <>
            <label>Digite seu nome : </label>
            <input 
            type="text" 
            name="fnome"
            value={nome}
            onChange={(e)=> handleChangeNome(e)}
            />
            <p>Nome digitado:  {nome}</p>

        </>
    ); */
    
    
    /*Os parâmetros acima é uma forma de retornar o que se escreve no input da pagina web 
    
    Duas formas de manipular elementos, tanto formularios e tambem selects
    
    
    */