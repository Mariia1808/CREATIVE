
console.log("---------------")
console.log("Задание с объектами")
let obj1 = {
    name: "Мария",
    last_name: "Банникова",
    age: 21
}
console.log(`Я ${obj1.last_name} ${obj1.name}, мне ${obj1.age} год`)

let obj2 = {}
let obj3 = new Object()
for(let i=0; i<5; i++){
    obj2 = {...obj2, [i]: i+1}
    obj3 = {...obj3, [i+3]: i+8}
}
obj3.name = 'Мария'
delete obj3.name
delete obj3[4]
console.log(obj1)
console.log(obj2)
console.log(obj3)

console.log("---------------")
console.log("Задание с массивами")
console.log("Первый массив")

let array = new Array()
array.push(String(0))
console.log(array)
for(let i=1; i<5; i++){
    array.unshift(String(i))
    array.push(String(i))
    console.log(array)
}

let array_two= new Array()
array_two.push(...array)

for(let i=1; i<5; i++){
    array.pop()
    array.shift()
    console.log(array)
}

console.log("Второй массив")
console.log(array_two)