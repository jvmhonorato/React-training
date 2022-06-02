
import React from "react";

class Car extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
        /*esse codigo vai usar o bind pra linkar a função
        LigarDesligar com a função this que é a Car */
        this.ld=this.ligarDesligar.bind(this)
        
    }
    ligarDesligar(){
        //this.state.ligado=true

//setState puro
        //this.setState({ligado:!this.state.ligado})

//Arroy function
       /* this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )*/
//Tradicional function
        this.setState(
            function(state){
                return{
                    ligado:!state.ligado
                }
            }
        )
    }
    acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual + props.fator}
            )

        )
    }
    desAcelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:this.state.velAtual - this.props.fator}
            )
        )
    }
    // esse component é chamdo automaticamento quando o objeto é montado
    /*componentDidMount(){
        console.log('O componente foi montado')}*/

        //componte é chamado toda vez que o componente for atualizado
        /*componentDidUpdate(){
            console.log('O componente foi atualizado')
        }*/
   componentWillMount(){
       console.log('O componente foi removido')
   }


  

render(){
    return(
        <div>
            <h1>Meu carro</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado? "Sim":"Não"}</p>
            <p > vel.Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>{this.state.ligado ? 'Desligar carro':'Ligar carro'}</button>
            <button onClick={()=>this.acelerar()}>acelerar</button>
            <button onClick={()=>this.desAcelerar()}>desacelerar</button>

        </div>
        )
    }
}
export default Car

/*
1:Por padrão sempre que criar um componete Class inserir o constructor(props) e o super(props)
2: usar o this. pra inserir os componentes:valores
criamos um this.state={} recebendo componentes e valores em forma de {} classe
3 criamos uma função:    ligarDesligar(){
        //this.state.ligado=true
        this.setState({ligado:!this.state.ligado}) pra usarmos no botão com intuito de alterar o valor boleano ligado usar sempre a sintaxr {componete:!this.state.componete} pra alterar o valor do componente boleano no mesmo botão
 4: usar um operção ternaria na descrição do botão para que ele manisfeste  a ação desejada correspondente ao estado que ele se encontra   
 
 5: Na aula 23 vimos as 3 fomras de declara o setState na função ligarDesligar() todas as funções acontecem dentro do this.setState
6: criamos uma função acelerar() com o uso do this.setState pra poder adicionar +1 a cada click no componente velAtual. a velocidade aumenta de acordo com o numero declarado no fator na tag<Car fator={1}/> no arquivo pai(App.js)

7: Na aula 24 usamos o bind no comando :  this.ld=this.ligarDesligar.bind(this) que linka a função this que é a Car() com a função ligarDesligar() assim podemos mudar o evento onClick do button tirando o arrow function de: {()=>this.ligarDesligar()} para {this.ld} que é bem mais simples

8: na aula 25 aprendemos sobre ciclos primeiro inserimos o: componentDidMount() quea função usada pra manifestar quando o conteúdo é montado, depois a:componentDidUpdate() que é a função pra manisfestar quando o conteúdo é atualizado, e por ultimo criamos no arquivo pai(App.js) um: const [car,setCar]=useState(true) em seguida um função: const mostrarOcultarCar = ()=>{
      setCar(!car)
   } e depois um botão : <button onClick={()=>mostrarOcultarCar()}>{car ?"Ocultar" : "Mostrar"}</button>
esse codigo teve que ser montado no arquivo pai pois se tratava de uma remoção logo nao poderia ser criado no arquivo filho(Car.js)


*/