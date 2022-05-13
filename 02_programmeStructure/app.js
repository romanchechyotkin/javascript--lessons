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

