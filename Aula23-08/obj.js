/*
Caracteristicas Objeto
Abstração
Herança
Encapsulamento
Polimorfismo
*/

/*Formas diferentes de criar um objeto*/
/*(1) Notação literal*/
/*
const obj1 = {}
console.log(obj1);
obj1. atrib = 10
console.log(obj1);
*/

/*(2) Utilizando o new Object*/
/*
console.log(typeof new Object(), Object);
const obj2 = new Object()
console.log(obj2, new Object());
*/    

/*(3) A partir de uma função construtora*/
/*
function produto(nome, marca, custo, taxa) {
    this.nome = nome
    this.marca = marca
    this.getPreco = () => {return custo* (1.3+taxa)}
    this.getMarca = () => {return marca}
}
const p1 = new produto('mouse', 'logitex', 100, 0.15)
console.log(p1.getPreco(), p1.getMarca());    
*/

/*(4) A partir da função factory*/
/*
function criarFuncionario(nome, salario, faltas) {
    return{
        nome, salario, faltas, 
        getSalarioLiquido(){
            return (salario/30 * (30 - faltas))
        }
    }
}
const funcionario1 = criarFuncionario('Maria', 10000, 1)
console.log(funcionario1.getSalarioLiquido());
//*/