import React,{useState,useEffect} from "react";
import Header from './componentes/Header';
import Corpo from './componentes/Corpo';
import './App.css';
import Relogio from "./componentes/Relogio";
import Numero from "./componentes/Numero";
import ledVerde from './componentes/imgs/led_verde.jpg';
import ledVermelho from './componentes/imgs/led_vermelho.png';
import Led from "./componentes/Led";
import Cumprimento from "./componentes/Cumprimento";
import Log from "./componentes/Log";
import Cor from "./componentes/Cor";
import Cor2 from "./componentes/Cor2";
import Map from "./componentes/Map";
import Formulario from "./componentes/Formulario";
import Formulario2 from "./componentes/Formulario2";
import Nota from "./componentes/Nota";
import Resultado from "./componentes/Resultado";
import Caixa from "./componentes/Caixa";
import Canal from "./componentes/Canal";
import Contagem from "./componentes/Contagem";
import Storage from "./componentes/Storage";
import Classe from "./componentes/Classe";
import Car from "./componentes/Car";
import BaseClass from "./componentes/BaseClass";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";
import Pagina1 from "./componentes/Pagina1";
import Pagina2 from "./componentes/Pagina2";
import Tabela from "./componentes/Tabela";
import Imc from "./componentes/Imc";
import Imc2 from "./componentes/Imc2";
import peso from "./componentes/Peso";
import Altura from "./componentes/Altura";
import CalcularIMC from "./componentes/CalcularIMC";
import ResultadoIMC from "./componentes/ResultadoIMC";
import Peso from "./componentes/Peso";





export default function App(){
   const [num,setNum]=useState(0)
   const [ligado,setLigado]=useState(false)
   //const cancelar =()=>{return false}
   const cancelar =(obj)=>{return obj.preventDefault()}
   const textoDestaque={
    color:'#00f',
    fontSize: '3em',
    textAlign: 'center' } 
   const[notas,setNotas]=useState({'nota1':'0','nota2':'0','nota3':'0','nota4':'0'})  
   const handleSetNotas=(e)=>{
    if(e.target.getAttribute('name')=='nota1'){
       setNotas({'nota1':e.target.value,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':notas.nota4})
    }else if(e.target.getAttribute('name')=='nota2'){
      setNotas({'nota1':notas.nota1,'nota2':e.target.value,'nota3':notas.nota3,'nota4':notas.nota4})

    }else if(e.target.getAttribute('name')=='nota3'){
      setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':e.target.value,'nota4':notas.nota4})
       
       
    }else if(e.target.getAttribute('name')=='nota4'){
      setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':notas.nota4,'nota4':e.target.value})
    }


    
   }
   const [car,setCar]=useState(true)
   const mostrarOcultarCar = ()=>{
      setCar(!car)
   }
   const [resumo,setResumo]=useState(Globais.resumo)

   const gravarResumo=()=>{
      Globais.resumo=resumo;
   }
    const verResumo=()=>{
    alert(Globais.resumo)
   }
   const [Pagina,setPagina]= useState()

   useEffect(
      ()=>{
         const url=window.location.href
         const res = url.split('?')
         setPagina(res[1])
      }
   )
   const LinksPagina=(p)=>{
   if(p==1){
      window.open('http://localhost:3000?1','_self')
   }else if(p==2){
      window.open('http://localhost:3000?2','_self')
   }
}

   const retornarPagina=()=>{
   if(Pagina==1){
      return <Pagina1/>
   }else if(Pagina==2){
      return <Pagina2/>

   }else{
      return( <div>
      
            <button onClick={()=>LinksPagina(1)}>Pagina 1</button>
            <button onClick={()=>LinksPagina(2)}>Pagina 2</button>
            </div>)
   }

}

   const [peso,setPeso]=useState(0)
   const [altura,setAltura]=useState(0)
   const [resultado,setResultado]=useState(0)
      
 


  

   return(

    <> 
       <section className="box">
         <Cumprimento/>
         <hr/>
         <Relogio/>
         <hr/>
         <Log/>
         <hr/>
         <h1 style={{color:'#f00',fontSize: '5em',textAlign: 'center'}} >Curso</h1>
         <hr/>
         <h2 style={textoDestaque}>React</h2>
         <Header/> 
         <hr/>
         <Corpo/>
         <p>Valor do state num em App.js:{num}</p>
         <hr/>
         <button className="btn" onClick={()=>setNum(num+10)}>Botão soma 10 no App.js</button>
         <hr/>
         <Numero num={num} setNum={setNum}/>

         <img alt='' src={ligado?ledVerde:ledVermelho}/>
         <hr/>
         <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
         <hr/>
         <Led ligado={ligado} setLigado={setLigado}/>
         
            <a href="https://youtube.com"
            target='blank'
            onClick={(e)=>cancelar(e)}>Teste</a>
                 
            <Cor />
            <hr/>
         <Cor2/>
         <hr/>
         <Map/>
         <hr/>
         <Formulario/>
         <hr/>
         <Formulario2/>

         <Nota num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
         <Nota num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
         <Nota num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
         <Nota num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>
         <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>

         <Caixa site='www.youtube.com'>
            <h1> Contenção</h1>
            <p>Aprendendo sobre contenção</p>
            <hr/>
            <Canal/>

         </Caixa>
         <hr/>
         <Contagem/>
         <hr/>
         <Storage/>
         <hr/>
         
         <Classe canal="Conteúdo da propriedade CANAL la no arquivo pai(App.js) carregado em (Contructor) e (super) no arquivo filho com auxilio do props" curso='Conteúdo da propriedade CURSO la no arquivo pai(App.js) carregado em (Contructor) e (super) no arquivo filho com auxilio do props'/>
         {car ? <Car fator={2}/> : ''}
         <button onClick={()=>mostrarOcultarCar()}>{car ?"Ocultar" : "Mostrar"}</button>

         <BaseClass/>
         <hr/>

         <Info/>
         <hr/>
         
         <p>canal: {Globais.canal} </p>
         <p>curso: {Globais.curso} </p>
         <p>ano: {Globais.ano} </p>
         <hr/>
         <label>Insira o resumo: </label>
         <input type='text' size={100}  value={resumo} onChange={(r)=>setResumo(r.target.value)}/>
         <hr/>
         <button onClick={()=>gravarResumo()}>Gravar resumo</button>
         <hr/>
         <button onClick={()=>verResumo()}>Ver resumo</button>
         <hr/>
         {retornarPagina()}
         <hr/>
        <Tabela/>
        <hr/>
        <Imc/>
        <hr/>
        <Peso p={peso} sp={setPeso}/>
        <Altura a={altura} sa={setAltura}/>
        <CalcularIMC p={peso} a={altura} sr={setResultado}/>
        <ResultadoIMC r={resultado}/>
        <Imc2/>

        
        
  
        


      
       </section>
    
    </>
  )
}

     /*COMENTÁRIOS
     1:O mesmo nome dado depois do IMPORT terá que ser usado 
     na chamada  da função no caso o HEADER
     2:Sempre dar o IMPORT chamando o componente no arquivo APP.JS após criar um componente
     3:Sempre inserir o componente dentro da export default function APP()
     4:inserir componente dentro da TAG < componente/>


     5:Os atributos passados no props do arquivo Dados.JS tem que ser os mesmos inseridos na TAG correpondente no arquivo Corpo.js 
     6:Os valores dos atributos tambem podem ser passados em constantes e em seguidas chamados na função dentro de {}
     7:a TAG <Dados/> foi transferidas pra o arquivo Corpo.js
     
     8:Na aula 7 aprendemos a enviar funções do tipo Arrow function atraves dos componetes para o arquivo Corpo.js

     9:Na aula 8 aplicamos elementos css da linha da TAG,  tambem na const no cabeçalho, separando as palavra de comando css por uma letra maiúscula não por hífen e os comando por ,(virgula) e não ;(ponto e virgula por se tratar de uma esfera JS e não CSS.
     Já no CSS externo a a regra do CSS volta a valer e ao inves do comando style={} na linha, usamos o className"nomeDaClasse"
     10: Pra redimencionar a imagen cria uma Tag div em torno da tag IMG e inseri uma className= 'container'. e no arquivo app.css formata a tag a class container com IMG como filho EX: .container IMG {width:300px; height: 300px;}

     11:Na aula 9 criamos um novo arquivo componente : Relogio.js
     nele criamos uma função nwew Date().toLocaleTimeString, importamos pra o arquivo App.js e chamamos na TAG <section>
     12:NO arquivo index.js encapsulei  o root.render dentro da função tick() logo em seguida chamei ela fora do bloco.
     OBS: deixar a constante: const root = ReactDOM.createRoot(document.getElementById('root')); fora da função tick() se não dar erro.
     12: logo em seguida usei a função setInterval(tick,1000) com a função tick como  primeiro parâmetro e o numero 1000 como segundo parâmentro
     pra atualizar o time a cada um milisegundo.

     13: Na aula 10 importamos o state com : import React,{useState} from "react"; depois atribuímos uma constante  a ela: const [num,setNum]=useState(0) com um numero inicial 0. depois chamamos ela em uma tag <p> : 
     <p>Valor do state num:{num}</p> em seguida um botão com o evento onCLick:<button onClick={()=>setNum(num+10)}>Botão</button> usando um arrow function com setNum pra adcionar +10 a cada vez que clica no botão.
     14: ainda na aula 10 criamos um componente Numero.js e criamos uma função Numero com parâmetro props criamos uma tag<p> com {props.num} dentro dela em seguida uma tag Button com evento onClick a difernça entre os dois modelos é que um é interno sem props e outro é externo com props:
       <p>Valor do state em Numeros.js: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>Botão</button>

      15:Na aula 11 aprendemos eventos, primeiramente importamos duas imagens de leds vermelho e verde pra pasta componentes/img, em seguida crimaos um state:
      const [ligado,setLigado]=useState(true) depois chamamos a img com um oderador térnario:<img src={ligado?ledVerde:ledVermelho}/> pra uma condicional e por ultimo criamos um button com o evento onClick associado a uma arrow function:   <button className="btn" onClick={()=>setLigado(!ligado)}>Ligar/Desligar</button>
     OBS:  o parametro de setLigado(!ligado)  tem que estar em negação ou seja tem que ter exclamação(!) 
     16: para mostrar o texto do botão de acordo com o state usar o mesmo princípio da img com os operdores térnarios:
     <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Ligado':'Desligado'}</button> ou mostrar inverso indicando uma ação: <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>.
     17:Pra fazer o processo externo é exatamente a mesma coisa do proocesso interno a diferença é que depois vc deverá importar o arquivo Led.js a chamr ele <Led/> no return.
     18:Outra forma de fazer é deixar o componente filho(Led.js)somente pra carregar os elementos visuais, deixando o state mo componete pai(App.js) usando o props ou seja do componente filho tira o: import React,{useState} from "react"; e tambem tira o:const [ligado,setLigado]=useState(false); e na chamada no componete pai vc declara: 
     <Led ligado={ligado} setLigado={setLigado}/> ao inves de <Led/> OBS: DESSA FORMA OS LEDS DEIXAM DE SER INDEPENDENTES E AMBOS ATERARÃO AO CLICK DO BOTÃO
     19: pra criar uma tag link em React sem retorno siga esses passos: 1 criar função:const cancelar =()=>{return false}
     2: criar chamada :  <a 
            href="https://youtube.com"
            target='blank'
            onClick={()=>cancelar()}

         >Teste</a>
      3:criar um parâmetro e dpois dar retorno .preventDefaut():
      const cancelar =(obj)=>{return obj.preventDefault()}
      4: em seguida passar parâmetro e para a chamada no return:
         <a 
            href="https://youtube.com"
            target='blank'
            onClick={(e)=>cancelar(e)}

         >Teste</a>
         4:OBS NO PARAMETRO onClick a letra (e) não é obrigatoria somnente asegunda letra tem que ser igual a primeira igualmente o paramtro (obj) pode ser qualquer nome.

         20: Na aula 12 crimaos o comoponente cumprimento com o uso da função new date pra dar o bom dia boa tarde ou boa noite de acordo com a hora do dia 
         21: ainda na aula 12 crimaos o componete Log com uso do state para informar se o usúario está logado ou nao de acordo com a tag <buttos > e o evento onClick
         22: ainda na aula 12 criamos o componmente Cor.js uma aplicação para mudar a cor do texto em decorrencia do click do mouse usando state, tambem criamos o setInterval(mudaCor,1000) pra que a cores mudem a cada 1000 mili segundo.

         23: Na aula 13 criamos o componente Map.js nele usamos o .map pra gerar uma lista de arrays automaticamente
         no arquivo Map.js tem mais detalhes sobre a aula.

         24:Na aula 14 criamos o componente Formulario.js
         manipulamos tano o INPUT para formularios, e tambem o SELECT

         25: Na aula 15 criamos o arquivo Formulario2.js com intuito de criar varios elementos usando apenas um state atribuinto classe de objetos a ele, detalhes da aula no arquivo Formulario2.js!

         26: na Aula 16 evoluimos o uso do state criamos dois arquivos filhos o Nota.js e o Resultado.js ambos crimaos com props com as funções no arquivo PAi(App.js)
         27: no arquivo Nota.js criamos a tag <legend> e O <input> pra gerar o rotilo e o campo onde os dados serão digitados ;
         28: no arquivo Resultado.js criamos uma tag <p> mostrando a soma das notas e uma tag <p> com a função ternaria prq dar o retrono da média aprovado ou reprovado
         29: no arquivo pai App.js crimaos a const da linha 29:32 e chamamos o return dos componetes filhos da linha 67:71

         30: Na aula 17 refizemos o exercício da aula 16so que usando state com objeto usando o arquivo App.js pra escrever todas as funções e usando o arquivo Notas.js apenas para manda o input e e o legend 

         31: na aula 18 aprendemos sobre CONTENÇÃO como inserir <tag> com conteúdo dentro dos componetes importados com o auxilio do props inserimos um parâmetrop site na tag <Caixa site=""> um <h1> e um <p> pra que os 3 manifestem o navegador é necessario insrir um props no componente filho Caixa.js
         32: ainda na aula 18... podemos tambem jogar um componente diferente  dentro da <TAG> <Caixa><Canal/></Caixa> o conteúdo do componete Canal.js vai passar pelo componente Caixa.js e aproveitar o props em seguida imprimir o conteúdo na tela

         33:Na aula 19 crimaos o componente Contagem.js nele usamos o useEffect pra imprimir uma mensagem no console e mostrar a contagem na aba do navegador toda vez que o botão com o evento onClick for ativado

         33.2:Na aula 20 crimaos o arquivo storage e aprendemos como criar chave, ver chave e deletar chave
         
         34: AULA 21 INICIO DE COMPONENTES DE CLASSES!
         criamos o componente Classe.js e inserimos a sintxe de class com um <h1> no return e chammos no App.js da forma convencional
         35: ainda na aula 21 vimos que pra inserirmos um conteúdo no arquivo pai(App.js) que veio do arquivo filho(Classe.js) no arquivo filho temor que gerar um constructor e um super com o parâmetro props.

         36: Na aula 22 criamos o arquivo filho Car.js usando o modelo de componente de classe com um botão pra alterar o estado do carro de ligado pra desligado.

         37: Na aula 23  ainda no componente Car.js vimos 3 fomas de manipular um setState
         usando ele puro, com arrow function e função tradicional.
         38: ainda na aula 23 criamos uma função acelerar() no arquivo Car.js, unserimos uma propriedade fator na tag <Car fator={1} /> e adicionamos um button pra que a cada click adicionte 1 no componente velAtual

         39:na aula 24 aprendemos a usar o Bind pra lincar duas funções. As instruções estão no arquivo Car.js

         40: na aula 25 aprendemos sobre ciclo de vida dos componente react,  as funções a serem usadas pra exercer uma ação quando carrega o componente, quando atualiza o coponente e quando remove um componete.

         41: Na aula 26 criamos o arquivo BaseClass.js nele temos um manula de todos os componentes básicos que necessitam pra ser criada uma classe dentro de react 

         42: Na aula 27 criamos dois componente o Globais.js e o Info.js. no globais.js inserimos apenas as variáveis sem return, ja no info.js importamos o arquivo Globais.js e crmos conteudo no return  em uma função export default no arquivo pai App.js importamos ambos os arquivos e no retunr do app.js inserimos um contéudo carregando o valor das variáveis do arquivo Globais.js e tambem chamamos a tag <Info/> que contem os valores do Globais.js sendo assim uma altrração em Globais.js ira altrar o contéudo dos dois arquivos tanto o App.js qunato o do Info.js
         43: ainda na aula 27 criamos um setState pra a variavel resumo em Globais.js : const [resumo,setResumo]=useState(Globais.resumo) pra poder manifestar ações na tela. Em seguida criamos duas funções:   
         const gravarResumo=()=>{Globais.resumo=resumo;}
         const verResumo=()=>{alert(Globais.resumo)
         } e depois crimos dois buttom um pra gravar o resumo e o outro pra da o alert:<button onClick={()=>gravarResumo()}>Gravar resumo</button> e <button onClick={()=>verResumo()}>Ver resumo</button> .Dessa forma podemos ver que temos acesso as variáveis Globais da Globais.js

         44:Na aula 28 criamos dois componentes Pagina1.js e Pagina2.js pra simular duas pagins distintas no navedor,
         importamos os componetes pagina 1 e pagina 2 pra o arquivo pai(App.js), crimaos um state: const [Pagina,setPagina]= useState(0), em seguida na linha 75 criamos um useEffect com  java script pra manipular o url em seguida uma função linkPagina com condicionais window,open e por ultimo um função retornarPagiana com condicionais e TAG button da linha 73:102 fazem parte da função nativa react de carregaamento de componete

         45: Na aula 29 crimaos um Arquivo Tabela.js, com componete função. primeiro crimaso um const carros com varios {}objetos com categoria preço e nome do veículo, depois criamos um função tabelaCarro(cat) com um parametro categoria e com uma TABLE dentro dela, em seguida criamos um state categoria, criamos tambem uma função linhas(cat) com o parâmetro cat, dentro dela uma const LI=[] e depois ainda dentro dela um carros.forEach() pra percorrer o arrey carros.mais detalhes no arquvio filho Tabela.js

         46: Na aula 30 criamos o arquivo filho Imc.js
         nele criamos tabelas e funções pra retornar o IMC indice de massa corporal. os passo a passo da calculadora estão comentado no arquivo Imc.js

         47: Na aula 31 faremos a calculadora imc novamente agora com os componentes separados em arquivos diferentes. Criamos os arquivos Ims2.js, Peso.js, Altura.js,Calcular.js e Resultado.js cada um com sua respectiva função com parametro props. pois usaremos os states no arquivo pai(App.js) . Declaramos os states na linha 114:116  os imports da linha 32:37 e da linha 211:215 retonamos os comoponete declarando seus respectivos props
         
         48: Na aula 32 convertemos os componetes externos usados pra criar a calculadora IMC( Ims2.js, Peso.js, Altura.js, CalcularIMC.js e ResultadoIMC.js) convertemos de componete função pra componete class de forma comentada. OBS: SEMPRE QUE O COMPONETE TIVER O STATE NO ARQUIVO PAI E FOR COMPONETE FUNÇÃO USAR O : PROPS.A OBS2:SEMPRE QUE FOR COMPONETE CLASS USAR O THIS.PROPS.A  OBS3: E SEMPRE QUE HOUER UMA FUNÇÃO NO COMPONENTE CLASS USAR O BIND PRA FUNDIR A FUNÇÃO!
     
     
     
     
     





























     
     */