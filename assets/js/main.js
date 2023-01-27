// var n1 = []
// var n2 = []

// function somatoria(n1, n2) {
//     return n1 + n2
// }

// function subtracao(n1, n2) {
//     return n1 - n2
// }

// function multiplicacao(n1, n2) {
//     return n1 * n2
// }

// function divisao(n1, n2) {
//     return n1 / n2
// }

// function cos0(radianos, raio) {
//     return Math.cos(radianos) * raio;
// }

// console.log(cos0(1, 10));
// // Expected output: 5.403023058681398

// console.log(cos0(2, 10));
// // Expected output: -4.161468365471424

// console.log(cos0(Math.PI, 10));
// // Expected output: -10

// function getCircleY(radians, radius) {
//     return Math.sin(radians) * radius;
// }

// console.log(getCircleY(1, 10));
// //            ^?

// console.log(getCircleY(2, 10));
// // Expected output: 9.092974268256818

// console.log(getCircleY(Math.PI, 10));
// // Expected output: 1.2246467991473533e-15


// function getTanDeg(deg) {
//     var rad = deg * Math.PI / 180;
//     return Math.tan(rad);
// }

// function getTan(x) {
//     return Math.tan(x);
// }

// console.log(getTan(45));

const botaoSeno = document.getElementById('seno');
const botaoCos = document.getElementById('cos');
const botaoTag = document.getElementById('tag');
const botaoMulti = document.getElementById('multiplicacao');
const botaoDivisao = document.getElementById('divisao');
const botaoSub = document.getElementById('subtracao')
const botaoSoma = document.getElementById('soma');
const botaoDecimal = document.getElementById('decimal');
const botaoRaiz = document.getElementById('raiz');
const botaoResultado = document.getElementById('resultado');
const displayCalc = document.getElementById('display');

const calculadora = document.querySelector('.calculadora')
const botoes = document.querySelectorAll('.botao')
// console.log(botoes)

botoes.forEach(teclas => {
    teclas.addEventListener('click', e => {
        const botao = e.target
        const acao = botao.dataset.action

    })
})

switch (expr) {
    case '+':
        n1 + n2;
        break;
    case '-':
        n1 - n2;
        break;
    case '/':
        n1 / n2;
        break;
    case '*':
        n1 * n2;
        break;
}
