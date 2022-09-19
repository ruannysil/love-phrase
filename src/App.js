import React, { Component } from "react";
import './style.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);


        this.frases = ['O amor não se vê com os olhos mas com o coração.', 'O amor é o espaço e o tempo tornados sensíveis ao coração.', 'Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.', 'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.', 'A distância faz ao amor aquilo que o vento faz ao fogo: apaga o pequeno, inflama o grande.', 'Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.', 'A medida do amor é amar sem medida.', 'Amar não é olhar um para o outro, é olhar juntos na mesma direção.' , 'Amar não é aceitar tudo. Aliás: onde tudo é aceito, desconfio que há falta de amor.', 'Como são sábios aqueles que se entregam às loucuras do amor!', 'Nada é pequeno no amor. Quem espera as grandes ocasiões para provar a sua ternura não sabe amar.', 'É tão absurdo dizer que um homem não pode amar a mesma mulher toda a vida, quanto dizer que um violinista precisa de diversos violinos para tocar a mesma música.', 'A suprema felicidade da vida é ter a convicção de que somos amados.', 'O amor não precisa ser explicado, apenas vivido. E eu amo vivê-lo com você!', 'Amor não é só beijos e amassos. Amor é cuidado, é carinho e também amizade.', 'Quando você me abraça, o mundo gira devagar.'
    ]
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }
    render() {
        return(
            <div className="container">
                <img src={require('./assets/frase.png')} alt="biscoito da sorte" className="img"/>
                <Botao nome="frase do amor" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
                <Footer />
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button className="botao" onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

class Footer extends Component {
    render(){
        return(
            <div>
                <img src={require('./assets/192-1926163_vetor-amor-png-san-valentin-vector-png.png')} alt="coraçao" className="corac" />
            </div>
        )
    }
}

export default App;