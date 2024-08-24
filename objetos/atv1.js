console.clear()

function Celular(marca, modelo, ram, armazenamento, preco) {
    this.getPreco = function () {
        return preco
    }

    this.getValores = function () {
        return { marca, modelo, ram, armazenamento }
    }
}

const iphone13 = new Celular("Apple", "iPhone 13", 4, 128, 7999);
console.log(iphone13.getValores())
console.log(`Preço: ${iphone13.getPreco()}`)

const galaxyS21 = new Celular("Samsung", "Galaxy S21", 8, 256, 6999);
console.log(galaxyS21.getValores())
console.log(`Preço: ${galaxyS21.getPreco()}`)