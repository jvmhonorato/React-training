import React,{ useState } from "react";


export default function Cor2(){
    const [cor2,setCor2]=useState(1)

    const roxo = {color: '#A723E8'}
    const laranja = {color:'#E83A23'}
    const salmao = {color: '#F22439'}

    const retCor2 = (c)=>{
        if(c==1){
            return roxo
        }else if(c==2){
            return laranja
        }else{
            return salmao
        }

    }
    const mudarCor2=()=>{
        setCor2(cor2+1)
        if(cor2 > 2){
            setCor2(1)
        }
    }

    return (
    <>
           <h2 style={retCor2(cor2)}>Mudando cor2...</h2> 
           <button onClick={()=>mudarCor2()} >Mudar a cor2...</button>
    
        </> 
    )
}
