import React from "react";

class Classe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <h1>"Primeiro componente de Classe carregado inteiramente no arquivo filho(Classe.js)"</h1>
            <p>Esse é: {this.props.canal}</p>
            <p>Esse é: {this.props.curso}</p>
            </div>

        )
    }
}
export default Classe;

/*
1: Componentes de classe é igual aos compontes comum mudando apnesa algums sintaxes

2: Com o auxilio do : constructor(props){
        super(props)
    } podemos fazer o link com o conteúdo inserido em <Classe/> no arquivo pai(App.js) 
3: e com a tag  <p>Esse é: {this.props.canal}</p> vamos carregalo na pagina. OBS: canal é a propriedade declarada dentro de <Classe canal='conteudo'/> la no arquivo pai(App.js) que estamos usando pra linkar os arquivo pai e filho pra que o conteúdo inserido em pai possa ser chamado no arquivo filho.
*/