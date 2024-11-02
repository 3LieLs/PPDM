soma.addEventListener('click', () => {
    x = parseFloat(n1.value) + parseFloat(n2.value)
    resultado.innerHTML = `${n1.value} + ${n2.value} = ${x}`
})

sub.addEventListener('click', () => {
    x = parseFloat(n1.value) - parseFloat(n2.value)
    resultado.innerHTML = `${n1.value} - ${n2.value} = ${x}`
})

mult.addEventListener('click', () => {
    x = parseFloat(n1.value) * parseFloat(n2.value)
    resultado.innerHTML = `${n1.value} * ${n2.value} = ${x}`
})

div.addEventListener('click', () => {
    if (n2.value == 0) {
        alert('Divisão por zero inválida')
    } else {
        x = parseFloat(n1.value) / parseFloat(n2.value)
        resultado.innerHTML = `${n1.value} / ${n2.value} = ${x}`
    }

})

raiz.addEventListener('click', () => {
    if (n1.value < 0 || n2.value < 0) {
        alert('Raízes negativas inválida')
    } else {
        x = n1.value ** (1 / parseFloat(n2.value))
        resultado.innerHTML = `${n1.value} v ${n2.value} = ${x}`
    }
})