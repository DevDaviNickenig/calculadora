const botoesNumeros = document.querySelectorAll('[data-numeros]')
const botoesOperadores = document.querySelectorAll('[data-operador]')
const numeroAnterior = document.querySelector('[data-numero-anterior]')
const numeroAtual = document.querySelector('[data-numero-atual]')
const botaoLimparTudo = document.querySelector('[data-reset]')
const botaoDeletar = document.querySelector('[data-delete]')
const botaoIgual = document.querySelector('[data-igual]')

botoesNumeros.forEach(teclas => {
    teclas.addEventListener('click', e => {
        console.log('numero')
    })
})

botoesOperadores.forEach(teclas => {
    teclas.addEventListener('click', e => {
        console.log('operador')
    })
})

botaoLimparTudo.addEventListener('click', e => {
    console.log('limpou tudo??')
})

botaoDeletar.addEventListener('click', e => {
    console.log('deletou?')
})

botaoIgual.addEventListener('click', e => {
    console.log('resultado')
})


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

