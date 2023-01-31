class Calculadora {
    constructor(numeroAnteriorDisplay, numeroAtualDisplay) {
        this.numeroAnteriorDisplay = numeroAnteriorDisplay
        this.numeroAtualDisplay = numeroAtualDisplay
        this.limparTudo()
    }

    limparTudo() {
        this.numeroAnterior = ''
        this.numeroAtual = ''
    }

    // deletar() { 

    // }

    apensarValor(numero) {
        this.numeroAtual = this.numeroAtual.toString() + numero.toString()
    }

    operacao(operacao) {
        this.operacao = operacao
        this.numeroAnterior = this.numeroAtual
        this.numeroAtual = ''
    }

    atualizarDisplay() {
        this.numeroAtualDisplay.innerText = this.numeroAtual
        this.numeroAnteriorDisplay.innerText = this.numeroAnterior
    }

}

const botoesNumeros = document.querySelectorAll('[data-numeros]')
const botoesOperadores = document.querySelectorAll('[data-operador]')
const numeroAnteriorDisplay = document.querySelector('[data-numero-anterior]')
const numeroAtualDisplay = document.querySelector('[data-numero-atual]')
const botaoLimparTudo = document.querySelector('[data-reset]')
const botaoDeletar = document.querySelector('[data-delete]')
const botaoIgual = document.querySelector('[data-igual]')

const calculadora = new Calculadora(numeroAnteriorDisplay, numeroAtualDisplay)

botoesNumeros.forEach(botoes => {
    botoes.addEventListener('click', () => {
        calculadora.apensarValor(botoes.innerText)
        calculadora.atualizarDisplay()
    })
})

botoesOperadores.forEach(botoes => {
    botoes.addEventListener('click', () => {
        calculadora.operacao(botoes.innerText)
        calculadora.atualizarDisplay()
    })
})

botaoLimparTudo.addEventListener('click', e => {
    calculadora.limparTudo()

})

botaoDeletar.addEventListener('click', e => {
    console.log('deletou?')
})

botaoIgual.addEventListener('click', e => {
    console.log('resultado')
})



// function calculo() {
//     let calculo
//     const n1 = parseFloat(this.numeroAnterior)
//     const n2 = parseFloat(this.numeroAtual)
//     switch (operador) {
//         case 'AC':
//             displayCalc.innerText = '';
//             break
//         // case 'C'
//         //     displayCalc.innerText = ;
//         // break
//         case '+':
//             calculo = n1 + n2
//             break
//         case '-':
//             calculo = n1 - n2
//             break
//         case '/':
//             //function subtração
//             break
//         case '*':
//             //function multiplicação
//             break
//         default:
//             displayCalc.innerText += e.target.innerText;
//     }

// }

// botoes.forEach(teclas => {
//     teclas.addEventListener('click', e => {
//         var primeiroDigito = parseInt(e.target.innerText)
//         var operador = e.target.id
//         console.log(operador)
//         console.log(primeiroDigito)
//         switch (e.target.innerText) {
//             case 'AC':
//                 displayCalc.innerText = '';
//                 break
//             // case 'C'
//             //     displayCalc.innerText = ;
//             // break
//             case '+':
//                 return n1 + n2
//                 break
//             case '-':
//                 return n1 - n2
//                 break
//             case '/':
//                 //function subtração
//                 break
//             case '*':
//                 //function multiplicação
//                 break
//             default:
//                 displayCalc.innerText += e.target.innerText;
//         }
//     })
// })

