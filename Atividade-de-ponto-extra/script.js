/*QUESTÃO 1*/
function gerarNumeroAleatorio(min, max) {
    //Crie uma linha de código que retorna um valor entre o "min" e o "max" e armazena em uma variável global
}
gerarNumeroAleatorio()

function mostrarNumeroAleatorio() {
   //Recupere o valor armazenado anteriormente e monstre em um console.log identificando se ele é um número par ou impar
}
mostrarNumeroAleatorio()


/*RESPOSTA*//*RESPOSTA*//*RESPOSTA*//*RESPOSTA*//*RESPOSTA*/
var aleatorio
function gerarNumeroAleatorio(min, max) {
    //Crie uma linha de código que retorna um valor entre o "min" e o "max" e armazena em uma variável global
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
}
gerarNumeroAleatorio(5, 10)


function mostrarNumeroAleatorio(element) {
   //Recupere o valor armazenado anteriormente e monstre em um console.log identificando se ele é um número par ou impar
    if (element % 2 == 0) {
        console.log(`${element} é par`);
    } else {
        console.log(`${element} é impar`);
    }
}
mostrarNumeroAleatorio(aleatorio)
/*---------------------------------------------------------------------------------------------------------*/


/*QUESTÃO 2*/
//Crie uma linha de código em que faça uma operação entre o primeiro e último de um array e retorne o valor final.


/*RESPOSTA*//*RESPOSTA*//*RESPOSTA*//*RESPOSTA*//*RESPOSTA*/
const num = [Math.floor(Math.random() * (100 - 1 + 1)) + 1, Math.floor(Math.random() * (100 - 1 + 1)) + 1, Math.floor(Math.random() * (100 - 1 + 1)) + 1, Math.floor(Math.random() * (100 - 1 + 1)) + 1]
console.log(`Resultado: primeiro número (${num[0]}) Segundo número(${num[num.length - 1]}) ${num[0] * num[num.length - 1]}`);
/*---------------------------------------------------------------------------------------------------------*/