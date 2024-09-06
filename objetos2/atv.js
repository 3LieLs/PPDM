const objx = { a: 1 }

const obj1 = Object.create(objx)
console.log(typeof obj1);

const obj2 = {
    __proto__: objx
}
console.log(obj2.a);

Object.assign()