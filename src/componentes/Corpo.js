import React from "react";
import Dados from './Dados'
import Data from './Data'
import Carros from './Carros'
import Motos from "./Motos";

export  default function Corpo(){
        const cnl  =()=>{ 
            return 'CFB'
        
        }
        const yt = 'youtube.com'
        const crs = 'React.js'
        const frt = 'fruta'
        const lgm = 'legume'
        const vrd = 'verdura'
        const gro = 'grão'
        const mss = 'massas'
        const ft =()=>{
            return ('Siena')}
        const frd = 'Fusion'
        const chv = 'Corsa'
        const vks = 'Virtus'
        const pch = 'Panamera'
        const hnd = 'Titan'
        const ymh = 'Fazer'
        const szk = 'Ninja'
        const somar =(v1,v2)=>{
            return v1+v2
        }
        const sub =(v1,v2)=>{
            return v1-v2
        }

    return(
        




        <section>
            <h2 className="texto"> Curso de REACT</h2>
            <hr/>
            <p> texto do componente Corpo.js </p>
            <hr/>
            <p> Texto adicioanal</p>
            <hr/>
            <Dados 
            canal = {cnl} 
            youtube ={yt}
             curso = {crs}
             somar = {somar}
             sub = {sub}
             />
             <hr/>
             <Data 
             fruta = {frt}
             legume = {lgm}
             verdura = {vrd}
             grão = {gro}
             massas = {mss}
             />
             <hr/>
             <Carros
             Siena = {ft} 
             Fusion = {frd}
             Corsa = {chv}
             Virtus ={vks}
             Panamera = {pch}
             />
             <hr/>
             <Motos
             a = {hnd}
             b ={ymh}
             c = {szk}
             
             
             />
             <hr/>
             <a href="https://www.youtube.com" target='_blank'>Link do youtube</a>
            

        </section>

    )
}