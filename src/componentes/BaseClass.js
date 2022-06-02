import React from "react";
 class BaseClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canal: 'CFB cursos',
            curso : 'React',
            ativo :true,
            nome:this.props.nomeAluno
            }
            //comanod BINd fará a conexão da função ativarDesativar com o this que é a class
            let ad= this.ativarDesativar.bind(this)
            //Instruções do construtor
      
        }
        // função para manipular state
        ativarDesativar(){
            this.setState(
                state=>({
                    ativo:!state.ativo
                })
            )
     
        }
        //função usada pra iniciar uma ação ao componente ser criado
        componentDidMount(){
            console.log('O componente foi criado')

        }
         //função usada pra iniciar uma ação ao componente ser atualizado
        componentDidUpdate(){
            console.log('O componente foi atualizado')

        }
         //função usada pra iniciar uma ação ao componente ser removido
        componentWillUnmount(){
            console.log('O componente foi removido')

        }
        render(){
            return(
                <>
                <h1>Componente de Classe</h1>
                <button onClick={this.ad}>Ativar/Desativar c/BIND</button>
                <button onClick={()=>this.ativarDesativa}>Ativar/Desativar s/BIND</button>
              
                </>
            )
        }



 }







export default BaseClass;

/*
1: essa aula tem como objetivo revisar como se cria um componet class, como usar classes com state e props de como usar e pra que usar os cmponentes de ciclo de vida, o uso do BIND e tambem como configura um <button onClick={()=>função}/>

*/