function carro(velMax = 200, aceleracao = 5, nome = "Carro") {
    let velAtual = 0 //Variável privada

    this.setAceleracao = (x) => {
        aceleracao = x
    }
    this.setAcelerar = () => {
        velAtual = (velAtual + this.aceleracao <= velMax)? velAtual + this.aceleracao:velMax
    }
    this.getVelAtual = () => {
        return velAtual
    }
}

const corola = new carro()
corola.velMax = 220
corola.setAceleracao(15)
corola.nome = "Corola"

corola.setAcelerar()
console.log(corola.getVelAtual());

/*const fusca = new carro()
fusca.velMax = 180
fusca.nome = "fusca"
console.log(fusca)*/