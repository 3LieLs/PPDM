// Função para gerar um vetor com 10 valores numéricos aleatórios
function gerarVetor() {
    const valores = [];
    for (let i = 0; i < 10; i++) {
        valores.push(Math.floor(Math.random() * 100)); // Gera valores aleatórios entre 0 e 99
    }
    return valores;
}

// Função para somar somente os valores ímpares do vetor
function somaImpares(vetor) {
    let soma = 0;
    for (let valor of vetor) {
        if (valor % 2 !== 0) { // Verifica se o número é ímpar
            soma += valor;
        }
    }
    return soma;
}

// Função para calcular a média dos valores pares do vetor
function mediaPar(vetor) {
    let soma = 0;
    let count = 0;
    for (let valor of vetor) {
        if (valor % 2 === 0) { // Verifica se o número é par
            soma += valor;
            count++;
        }
    }
    return count > 0 ? soma / count : 0; // Evita divisão por zero
}

// Código para executar as funções e exibir os resultados no console
const valores = gerarVetor();
console.log("Vetor:", valores);

const somaDosImpares = somaImpares(valores);
console.log("Soma dos valores ímpares:", somaDosImpares);

const mediaDosPares = mediaPar(valores);
console.log("Média dos valores pares:", mediaDosPares);