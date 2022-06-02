//import React,{useState} from "react";
import React from "react";
import ledVerde from './imgs/led_verde.jpg';
import ledVermelho from './imgs/led_vermelho.png';


export default function Led(props){
//const [ligado,setLigado]=useState(false);

    return(
        
    <>
    <img alt='' src={props.ligado?ledVerde:ledVermelho}/>
    <button className="btn" onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?"Ligado":"Desligado"}</button>

    
    </>
    )
}; 
     //Modelo sem o props.
    /*<img src={ligado?ledVerde:ledVermelho}/>
    <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?"Ligado":"Desligado"}</button>*/