let a = 13e4 // integer
let b = 13.13 // float
let c = 'that is thr first line,\nthat is the 2nd'// string
let d = NaN
let e = Infinity
let f = -Infinity
let j = true // boolean
let i = false // boolean 

console.log(c) // typeof равен string
console.log(a, b, d, e, f) // typeof у всех равен number

console.log('бинарные операторы')
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

console.log('соединение строк')
console.log('кон' + 'кате' + 'на' + 'ция')

console.log('сравнение')
console.log(3 > 2)
console.log(3 < 2)
console.log(NaN == NaN) // всегда false

console.log('логические операторы')
console.log(true && false) // && - это И
console.log(true && true)

console.log(true || false) // || - это ИЛИ
console.log(true || true)
console.log(false || false)

console.log(true != true) // ! - НЕ
console.log(false != true)
console.log(1 + 1 == 2 && 10 * 10 > 50)