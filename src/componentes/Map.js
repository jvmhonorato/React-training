//MODELO DE .MAP COMUM SEM JSON
/*
import React from "react";

export default function Map() {
const carros=['Ferrari','Bulgati','Mustang', 'Porche','Corvete'];
const listaCarros=carros.map(
    (c,i)=>
    <li key={i}>{i}-{c}</li>
)


return(
<>
    <ul>{listaCarros}</ul>
    </>
)
}
*/
/*OBS: a função map nao usa chaves depois do arrow function!
a função map tambem pode usar um segundo parâmetro na função o (i) ao lado de (c) que é o indice da lista


*/



//MODELO .MAP MAIS DETALHADO USANDO JSON 
import React from "react";

export default function Map() {
const carros=[
    {categoria: 'Esporte',preco:'110000.00', modelo: 'GolfGTI'},
    {categoria: 'Esporte',preco:'120000.00', modelo: 'Camaro'},  {categoria: 'SUV',preco:'120000.00', modelo: 'HRV'},
    {categoria: 'SUV',preco:'850000.00', modelo: 'T-CROSS'},
    {categoria: 'Utilítario',preco:'120000.00', modelo: 'Hilux'},
    {categoria: 'Utilítario',preco:'900000.00', modelo: 'Ranger'},

];
const listaCarros=carros.map(
    (c,i)=>
    <li key={i}>{i}- {c.categoria} {c.modelo} R${c.preco}</li>
)


return(
<>
    <ul>{listaCarros}</ul>
    </>
)
} 