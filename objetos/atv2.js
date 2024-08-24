console.clear()

const bolo1 = {
    nome: 'Cenoura', peso: '500g', preco: 15, getPreco: function () {
        return bolo1.preco
    }, getDesconto: function (desconto) {
        bolo1.preco = bolo1.preco - Math.round((bolo1.preco * desconto))
        return bolo1.preco
    }
}
console.log(`\nNome: ${bolo1.nome}`)
console.log(`Valor sem desconto: ${bolo1.getPreco()}`)
console.log(`Valor com desconto: ${bolo1.getDesconto(0.35)}`)


const bolo2 = new Object()


function Bolo(nome, peso, preco) {
    this.getNome = function () {
        return nome
    }

    this.getPreco = function () {
        return preco
    }

    this.getDesconto = function (desconto) {
        preco = preco - Math.round((preco * desconto))
        return preco
    }
}

const bolo3 = new Bolo('Morango', '750g', 20)
console.log(`\nNome: ${bolo3.getNome()}`)
console.log(`Valor sem desconto: ${bolo3.getPreco()}`)
console.log(`Valor com desconto: ${bolo3.getDesconto(0.20)}`)
