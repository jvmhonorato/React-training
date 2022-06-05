import React,{useState} from "react";

//Tabela HTML com as referências 
const tabelaimc=()=>{
    return(
        <table border='1' style={{borderCollapse:"collapse"}}>
            <thead>
                <tr>
                    <th>
                        Classificação
                    </th>
                    <th>
                        IMC
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobre peso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}
// função pra pegar o peso declarado no texto e manipular com o state p,sp 
 const fpeso =(p,sp)=>{
     return(
         <div>
             <label>
                 Peso
                 <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}/>
             </label>
         </div>
     )
 }
// função pra pegar a altura  declarada no texto e manipular com o state a,sa 
 const faltura =(a,sa)=>{
    return(
        <div>
            <label>
                Altura
                <input type="text" value={a} onChange={(a)=>{sa(a.target.value)}}/>
            </label>
        </div>
    )
}
//Função calcular com 3 parâmetro peso(p), altura(a) e setResultado(sr) dentro dela temos a função calc com a equação peso%(altura x altura) juntamente com o <button> com a função calc
const fcalcular=(p,a,sr)=>{
  const calc=()=>{
     sr( p/(a*a))

  }
  return(
      <div>
          <button onClick={calc}>Calcular</button>
      </div>
  )
}
//criada a função resultado com toFixed pra retinraapneas duas casas decimais
const fresultado=(r)=>{
    return(
        <div>
            <p>Resultado: {r.toFixed(2)}</p>
        </div>

    )
}



//criado 3 states o peso e o altura e resultado
export default function Imc() {
    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [resultado,setResultado]=useState(0)

    //chamamos no return as 4 funções com seus devidos parâmetros de state. Na função fresultado(resultado) e a função tabelaIMC()

     return(
         <>
         {fpeso(peso,setPeso)}
         {faltura(altura,setAltura)}
         {fcalcular(peso,altura,setResultado)}
         {fresultado(resultado)}
         {tabelaimc()}

         </>
     )

};
//os passo a paso estão comentado antes de cada função!