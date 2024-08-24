console.clear()

function retornarNome(nome) {
    console.log(`Bom dia, ${nome}\n`)
}
retornarNome(`Eliel`)


function mes(numMes) {
    switch (numMes) {
        case 1:
            console.log('Mes 1: Janeiro\n')
            break;
        case 2:
            console.log('Mes 2: Fevereiro\n')
            break;
        case 3:
            console.log('Mes 3: Março\n')
            break;
        case 4:
            console.log('Mes 4: Abril\n')
            break;
        case 5:
            console.log('Mes 5: Maio\n')
            break;
        case 6:
            console.log('Mes 6: Junho\n')
            break;
        case 7:
            console.log('Mes 7: Julho\n')
            break;
        case 8:
            console.log('Mes 8: Agosto\n')
            break;
        case 9:
            console.log('Mes 9: Setembro\n')
            break;
        case 10:
            console.log('Mes 10: Outubro\n')
            break;
        case 11:
            console.log('Mes 11: Novembro\n')
            break;
        case 12:
            console.log('Mes 12: Dezembro\n')
            break;
    }
}
mes(7)


function valor(num1, num2) {
    if (num1 == NaN || num2 == NaN) {
        console.log(`Não são números\n`)
    }
    else if (num1 > num2) {
        console.log('Número 1 é maior que o Número 2\n')
    }
    else if (num2 > num1) {
        console.log('Número 2 é maior que o Número 1\n')
    }
    else if (num1 == num2){
        console.log('Números são iguais\n')
    }
}
valor(2, 3)


function trabalho(salario, quantHrsExtras, quantFaltas) {
    let valHora = salario / 176
    valHora = Math.round(valHora)

    let salarioHrsExtras = (valHora * 1.50) * quantHrsExtras
    salarioHrsExtras = Math.round(salarioHrsExtras)

    let descontoFaltas = valHora * (quantFaltas * 8)
    descontoFaltas = Math.round(descontoFaltas)

    let salarioLiq = salario + salarioHrsExtras - descontoFaltas

    console.log(`Salário: ${salario}\nSalário líquido: ${salarioLiq}\nTotal recebido em horas extras: ${salarioHrsExtras}\nTotal descontado em faltas: ${descontoFaltas}\n`)
}
trabalho(5000, 10, 1)


const valores = [1, 2, 3, 4, 5, 6, 7, 8, ,9]
function exibirValores(array) {
    console.log(`Primeiro valor: ${array[0]}\nÚltimo valor: ${array[array.length-1]}\n`)
}
exibirValores(valores)