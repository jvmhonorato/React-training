 import React from "react";

 class Globais extends React.Component{
     static canal = "CFB cursos"
     static curso = "Curso de React"
     static ano = 2023
     static resumo='Curso de React do canal CFB cursos'
 }












 export default Globais;
 /*o return desse arquivo (Globais.js)será carregado no arquivo componete em que ele for importado. no caso em Info.js e no App.js ambos trão seus valores simuntaneamente alterado de acor com, a modificação dos valores das variáveis desse arquivo Globais.js 
 
 criamos um static "resumo" pra poder mauppular no arquivo pai App.js
 */

