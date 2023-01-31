class Calculadora {
    constructor(numeroAnteriorDisplay, numeroAtualDisplay) {
        this.numeroAnteriorDisplay = numeroAnteriorDisplay
        this.numeroAtualDisplay = numeroAtualDisplay
        this.limparTudo()
    }

    limparTudo() {
        this.numeroAnterior = ''
        this.numeroAtual = ''
        this.operador = undefined
    }

    deletar() {
        this.numeroAtual = this.numeroAtual.toString().slice(0, -1)
    }

    apensarValor(numero) {
        if (numero === '.' && this.numeroAtual.includes('.')) return
        this.numeroAtual = this.numeroAtual.toString() + numero.toString()
    }

    escolherOperacao(operacao) {
        if (this.numeroAtual == '') return
        if (operacao === 'sen0') {
            seno()
        }
        this.operacao = operacao
        this.numeroAnterior = this.numeroAtual
        this.numeroAtual = ''
    }

    calculo() {
        let calc
        const anterior = parseInt(this.numeroAnterior)
        const atual = parseInt(this.numeroAtual)
        if (isNaN(anterior) || isNaN(atual)) return
        switch (this.operacao) {
            case '+':
                calc = anterior + atual;
                break
            case '-':
                calc = anterior - atual;
                break
            case '÷':
                calc = anterior / atual
                break
            case '*':
                calc = anterior * atual
                break
            default:
                return
        }
        this.numeroAtual = calc
        this.operacao = undefined
        this.numeroAnterior = ''
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
        calculadora.escolherOperacao(botoes.innerText)
        calculadora.atualizarDisplay()
    })
})

botaoLimparTudo.addEventListener('click', () => {
    calculadora.limparTudo()
    calculadora.atualizarDisplay()

})

botaoDeletar.addEventListener('click', () => {
    calculadora.deletar()
    calculadora.atualizarDisplay()
})

botaoIgual.addEventListener('click', e => {
    calculadora.calculo()
    calculadora.atualizarDisplay()
})



