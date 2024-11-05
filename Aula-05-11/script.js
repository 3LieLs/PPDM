globalThis.MinhaApp = Object.freeze = ({
    saudacao(){
        return 'Ola meu app'
    },
    nome: 'sistemas interessante'
})


requestAnimationFrame('./global')
console.log(meuApp.exemplo());

meuApp

MinhaApp.nome = 'permite mudar o valor global.'
console.log(MinhaApp);


Em JavaScript, ao criar um objeto com uma função como uma de suas propriedades (método), qual palavra-chave é utilizada dentro dessa função para se referir ao próprio objeto?

Alternativas:

self
this
object
function
