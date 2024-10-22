console.clear()

const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
]


const pdt = p => p.preco > 1000.00 && p.eletronico
console.log(produtos.filter(pdt))

const com = c => c.preco > 1500.00? c.preco * 1.03: c.preco < 1500.00? c.preco * 1.06:
console.log(produtos.map(com))    

const urlLocal = require('./funcionarios.json')

const brasileiros = f => f.pais === 'Brasil'

const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func:funcAtual
}

const resultado = urlLocal.filter(brasileiros).filter(mulheres).reduce(menorSalario)

console.log(resultado);