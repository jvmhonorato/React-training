import React from "react";


export default function Imc2(){
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
    
}/*
1: na aula 32 convertemos componente função por componete class
dessa forma:


import React from "react";

export default class tabelaIMC extends React.Component{
    render(){
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
}

















*/