import React, { useState } from "react";

export default function Log(){
    const [log,setLog]=useState(false)
    const msglogin=()=>{
        return"Usuário logado"
    }
    const msglogoff=()=>{
        return"Favor logar"
    }


    return <>
    <p>{log?msglogin() : msglogoff()}</p>
    <button onClick={()=>setLog(!log)}>{log?'Logoff' : 'Login'}</button>
    </>
   
}
/*
Mais um exemplo do uso de state em componente externo

*/ 