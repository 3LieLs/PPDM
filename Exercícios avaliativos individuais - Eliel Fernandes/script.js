/*const montadora = ["Toyota1","Toyota2","Toyota3","Toyota4"]*/
/*for (let index = 0; index < montadora.length; index++) {
    console.log(`Montadora: ${montadora[index]}`)
}*/

/*for (index in montadora){
    console.log(`Montadora: ${montadora[index]}`)
}*/

/*montadora.forEach((elemento, indice, a) => {
    console.log(`${elemento}, ${indice}, ${a}`)
});
*/

/*const notas = [10, 5.4, 5, 1.8, 9]
console.log(`${notas.filter((x) => x >= 5)}`)*/

function teste(nome) {
    console.log(`Bom dia, ${nome}`)
}
teste('Eliel')

function mes(numMes) {
    switch (numMes) {
        case 1:
            console.log('Mes 1: Janeiro')
            break;
        case 2:
            console.log('Mes 2: Fevereiro')
            break;
        case 3:
            console.log('Mes 3: Março')
            break;
        case 4:
            console.log('Mes 4: Abril')
            break;
        case 5:
            console.log('Mes 5: Maio')
            break;
        case 6:
            console.log('Mes 6: Junho')
            break;
        case 7:
            console.log('Mes 7: Julho')
            break;
        case 8:
            console.log('Mes 8: Agosto')
            break;
        case 9:
            console.log('Mes 9: Setembro')
            break;
        case 10:
            console.log('Mes 10: Outubro')
            break;
        case 11:
            console.log('Mes 11: Novembro')
            break;
        case 12:
            console.log('Mes 12: Dezembro')
            break;
    }
}
mes(7)

function valor(num1, num2) {
    if (num1 != Number || num2 != Number) {
        console.log(`Não são números`)
    } else if (num1 == Number || num2 == Number){
        if (num1 > num2) {
            console.log(`Número 1 é maior que o número 2`)
        } else {
            console.log(`Número 2 é maior que o número 1`)
        }
    }
}
valor(2, 3)

const numeros  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`${numeros[0]}, ${numeros[numeros.length - 1]}`)

function funcNumeros() {
    
}