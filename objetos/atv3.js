console.clear()

/*
function helloWorld() {
    console.log(`Hello, World!`);
}
helloWorld()
//*/


/*
function nSoma(n1, n2, n3, n4) {
    console.log(`${n1} + ${n2} + ${n3} + ${n4} = ${n1 + n2 + n3 + n4}`);
}
n = []
n[0] = Math.round(Math.random() * 100) + 1
n[1] = Math.round(Math.random() * 100) + 1
n[2] = Math.round(Math.random() * 100) + 1
n[3] = Math.round(Math.random() * 100) + 1
nSoma(n[0], n[1], n[2], n[3])
//*/


/*
function nMult(n1, n2) {
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}
n = Math.round(Math.random() * 100) + 1
nMult(n, 10)
//*/


/*
function thisBindExemplo() {
    console.log(this);
}
const obj1 = { nome: 'Eliel', idade: 18}
//thisBindExemplo() //Não utilizando o método bind(), onde vai dar Erro, pois 'this' não se refere ao objeto 'obj1'
thisBindExemplo = thisBindExemplo.bind(obj1)
thisBindExemplo() //Utilizando o método bind(), onde o 'this' vai se referir ao objeto 'obj1'
//*/


/*
const obj1 = {nome: 'Eliel', mostraThis: function (a, b, c) {
    console.log(this);
}}
obj1.mostraThis()
const obj2 = {idade: 18}
const obj3 = {olhos: 'castanhos'}
obj1.mostraThis.call(obj2, 1, 2, 3)
obj1.mostraThis.call(obj3, 1, 2, 3)
//*/


/*
const obj1 = {nome: 'Eliel', mostraThis: function (a, b, c) {
    console.log(this);
}}
obj1.mostraThis()
const obj2 = {idade: 18}
const obj3 = {olhos: 'castanhos'}
obj1.mostraThis.apply(obj2, [1, 2, 3])
obj1.mostraThis.apply(obj3, [1, 2, 3])
//*/

/*
function nomeUsuario(x) {
    console.log(`Olá, ${x}`);
}
nomeUsuario('Eliel');


chamarNome = function (x) {
    console.log(`Olá, ${x}`)
}
chamarNome('Eliel')
//*/

/*
function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
nVar = Math.round(Math.random() * 10) + 1
console.log(`Fatorial de ${nVar}: ${fatorial(nVar)}`)
//*/

/*
function Pessoa(nome) {
    this.nome = nome
    let idade = 0

    this.aumentarIdade = function () {
        idade++
    }

    this.getIdade = function () {
        return idade
    }
}
const pessoa1 = new Pessoa("Eliel")
console.log(`Nome: ${pessoa1.nome}`)
console.log(`Primeira idade: ${pessoa1.getIdade()}`)

nVar = Math.round(Math.random() * 100) + 1
for (let x = 0; x < nVar; x++) {
    pessoa1.aumentarIdade()
}
console.log(`Segunda idade: ${pessoa1.getIdade()}`)
//*/