const a = 12
let b = a * 10

console.log(b);
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4) + 100);

let number = Number(prompt('input the number'))
console.log(number);
console.log(typeof number);

console.log('условные операторы');
console.log('if');
if (number > 10){
    console.log('great');
}
else{
    console.log('not bad');
}

console.log('while');
number = 0
while(number <= 12){
    console.log(number);
    number = number + 2;
}

let result = 1
let counter = 0
while(counter<10){
    result = result * 2;
    counter += 1;
}
console.log('while do');
let yourName;
do{
    yourName = prompt("Kтo вы?");
} while (!yourName);
console.log(yourName);

if (false != true) {
    console.log('good')
    if(1 < 2) {
        console.log("Hичero удивительного.");
    }
}

console.log('for');
for(let number = 0; number <= 12; number = number + 2){
    console.log(number);
}
result = 1
for(let number = 0; number < 10; number = number + 1){
    result = result * 2
}
console.log(result);
console.log('Принудительный выход из цикла')
for(let number = 20; ; number = number + 1){
    if(number % 7 == 0){
        console.log(number);
        break
    }
}

console.log('Построение треугольника в цикле');
let hash = '#'
for(let counter = 1; counter <= 7; counter++){
    console.log(hash);
    hash = hash + '#'
}

console.log('FizzBuzz'); 
/* 
    Напишите программу, в которой с помощью console.log выводятся все чис-
    ла от 1 до 100 с двумя исключениями. Для чисел, кратных 3, вместо числа
    выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz".
*/

number = 1
while(number <= 100){
    if(number % 5 == 0 && number % 3 == 0){
        console.log(number, 'FizzBuzz');
    }
    else if(number % 3 == 0){
        console.log(number, 'Fizz');
    }
    else if(number % 5 == 0){
        console.log(number, 'Buzz');
    }
    else{
        console.log(number);
    }
    number++
}